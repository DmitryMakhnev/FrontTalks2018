

module.exports = function (wallaby) {
    return {
        files: [
            'generationResult/**/*.js',
            '!generationResult/**/*.test.js'
        ],
        tests: [
            'generationResult/**/*.test.js'
        ],

        env: {
            type: 'node',
        },
        testFramework: 'mocha',

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        }
    };
};

