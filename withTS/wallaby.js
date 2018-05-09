const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*.test.ts', ignore: true }
        ],
        tests: [
            { pattern: 'src/**/*.test.ts', load: false },
        ],

        env: {
            kind: 'chrome',
            params: {
                // see some flags https://wallabyjs.com/docs/integration/chrome.html#passing-chrome-flags
                runner: '--headless --disable-gpu'
            }
        },
        testFramework: 'mocha',

        postprocessor: wallabyWebpack({
            resolve: {
                extensions: ['.js']
            }
        }),
        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};