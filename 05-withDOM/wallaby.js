// based on https://github.com/wallabyjs/wallaby-webpack-es6-react

const wallabyWebpack = require('wallaby-webpack');


module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'src/**/*.js', load: false },
            { pattern: 'src/**/*.test.js', ignore: true }
        ],
        tests: [
            { pattern: 'src/**/*.test.js', load: false }
        ],

        env: {
            kind: 'chrome',
            params: {
                // see some flags https://wallabyjs.com/docs/integration/chrome.html#passing-chrome-flags
                runner: '--headless --disable-gpu'
            }
        },
        testFramework: 'mocha',

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },
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