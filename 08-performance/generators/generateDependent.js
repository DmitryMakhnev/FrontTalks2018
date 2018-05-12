const fse = require('fs-extra');
const path = require('path');

const requiredSamplesCount = +process.env.FILES_COUNT;

const {
    generateResultSamples,
    writeSamples
} = require('./common');

const GENERIC_ID_TEMPLATE = '__GENERIC_ID__';
const BASE_FILE_NAME = 'SomeDependentModule';
const DEPENDENCY_FILE_NAME = 'dependency';

const moduleName = `${BASE_FILE_NAME}${GENERIC_ID_TEMPLATE}`;
const genericIdTemplateRegExp = new RegExp(GENERIC_ID_TEMPLATE, 'g');


const resultDirAddress = path.join(__dirname, '/../', 'generationResult');
const samplesDir = path.join(__dirname, '/../', 'samples/dependent');

const fileAddress = path.join(samplesDir, `${moduleName}.js`);
const testFileAddress = path.join(samplesDir, `${moduleName}.test.js`);


console.log(`samplesDir: ${samplesDir}`);
console.log(`fileAddress: ${fileAddress}`);
console.log(`testFileAddress: ${testFileAddress}`);
console.log(`resultDirAddress: ${resultDirAddress}\n\n`);

(async () => {
    await fse.emptyDir(resultDirAddress);
    console.log('clean result directory');

    const filesContent = await Promise.all([
        fse.readFile(fileAddress, 'utf8'),
        fse.readFile(testFileAddress, 'utf8'),
    ]);

    const codeFileContent = filesContent[0];
    const testFileContent = filesContent[1];

    const samplesList = generateResultSamples(
        resultDirAddress,
        BASE_FILE_NAME,
        codeFileContent,
        testFileContent,
        genericIdTemplateRegExp,
        requiredSamplesCount
    );

    await Promise.all(
        writeSamples(samplesList)
    );

    await fse.copy(
        path.join(samplesDir, `${DEPENDENCY_FILE_NAME}.js`),
        path.join(resultDirAddress, `${DEPENDENCY_FILE_NAME}.js`),
    );

    console.log('ready');

})();