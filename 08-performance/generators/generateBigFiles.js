const fse = require('fs-extra');
const path = require('path');

const requiredSamplesCount = +process.env.FILES_COUNT;
const requiredMethodsCount = +process.env.METHODS_COUNT;

const {
    writeSamples,
    resultDirAddress
} = require('./common');

const GENERIC_ID_TEMPLATE = '__GENERIC_ID__';
const SPLIT_POINT_TEMPLATE = '__SPLIT_POINT__';
const BASE_FILE_NAME = 'SomeBigModule';

const moduleName = `${BASE_FILE_NAME}${GENERIC_ID_TEMPLATE}`;
const genericIdTemplateRegExp = new RegExp(GENERIC_ID_TEMPLATE, 'g');
const methodGenericIdTemplateRexExp = /__GENERIC_METHOD_ID__/g;


const samplesDir = path.join(__dirname, '/../', 'samples/bigFiles');

const fileAddress = path.join(samplesDir, `${moduleName}.js`);
const testFileAddress = path.join(samplesDir, `${moduleName}.test.js`);


function generateSampleMethods(codeFileContent, testFileContent) {
    const splittedCodeContent = codeFileContent.split(SPLIT_POINT_TEMPLATE);
    const splittedTestContent = testFileContent.split(SPLIT_POINT_TEMPLATE);

    const codeMethod = splittedCodeContent[1];
    const testMethod = splittedTestContent[1];

    const codeMethods = [];
    const testMethods = [];

    for (let i = 0; i !== requiredMethodsCount; i += 1) {
        const processedCodeMethod = codeMethod.replace(methodGenericIdTemplateRexExp, i);
        codeMethods.push(processedCodeMethod);

        const processedTestMethod = testMethod.replace(methodGenericIdTemplateRexExp, i);
        testMethods.push(processedTestMethod);
    }

    const resultCodeContent = [
        splittedCodeContent[0],
        ...codeMethods,
        splittedCodeContent[2]
    ].join('');

    const resultTestContent = [
        splittedTestContent[0],
        ...testMethods,
        splittedTestContent[2]
    ].join('');

    return {
        codeFileContent: resultCodeContent,
        testFileContent: resultTestContent
    }
}


function generateSample(codeFileContent, testFileContent, id) {
    codeFileContent = codeFileContent.replace(genericIdTemplateRegExp, id);
    testFileContent = testFileContent.replace(genericIdTemplateRegExp, id);

    const methodsGenerationResult = generateSampleMethods(codeFileContent, testFileContent);
    codeFileContent = methodsGenerationResult.codeFileContent;
    testFileContent = methodsGenerationResult.testFileContent;

    return {
        codeFilePath: path.join(resultDirAddress, `${BASE_FILE_NAME}${id}.js`),
        codeFileContent: codeFileContent,
        testFilePath: path.join(resultDirAddress, `${BASE_FILE_NAME}${id}.test.js`),
        testFileContent: testFileContent,
    };
}


function generateSamplesList(codeFileContent, testFileContent) {
    const samplesList = [];

    for (let i = 0; i !== requiredSamplesCount; i += 1) {
        const sample = generateSample(codeFileContent, testFileContent, i);
        samplesList.push(sample);
    }

    return samplesList;
}


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

    const samplesList = generateSamplesList(codeFileContent, testFileContent);

    await Promise.all(
        writeSamples(samplesList)
    );

    console.log('ready');
})();

