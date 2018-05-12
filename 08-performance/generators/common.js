const fse = require('fs-extra');
const path = require('path');


function generateResultSamples(resultDirAddress, baseFileName, codeFileContent, testFileContent, genericIdTemplateRegExp, count) {
    const samplesList = [];

    for (let i = 0; i !== count; i += 1) {
        const sample = generateSample(resultDirAddress, baseFileName, codeFileContent, testFileContent, genericIdTemplateRegExp,  i);
        samplesList.push(sample);
    }

    return samplesList;
}


function generateSample(resultDirAddress, baseFileName, codeFileContent, testFileContent, genericIdTemplateRegExp, id) {
    return {
        codeFilePath: path.join(resultDirAddress, `${baseFileName}${id}.js`),
        codeFileContent: codeFileContent.replace(genericIdTemplateRegExp, id),
        testFilePath: path.join(resultDirAddress, `${baseFileName}${id}.test.js`),
        testFileContent: testFileContent.replace(genericIdTemplateRegExp, id),
    };
}


function writeSamples(samplesList) {
    const writePromises = samplesList.reduce(
        (writePromises, sample) => {
            writePromises.push(fse.writeFile(sample.codeFilePath, sample.codeFileContent));
            writePromises.push(fse.writeFile(sample.testFilePath, sample.testFileContent));
            return writePromises;
        },
        []
    );
    return writePromises;
}


module.exports = {
    generateResultSamples,
    writeSamples,
    resultDirAddress: path.join(__dirname, '/../', 'generationResult')
};