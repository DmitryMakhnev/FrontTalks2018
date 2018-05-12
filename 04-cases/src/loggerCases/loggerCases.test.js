import assert from 'assert';

describe('loggerCases', () => {
    
    it('array transform chain', () => {
        const array = [1, 3, 2, 5, 4];

        const result = array
            .slice()
            .sort() /*? */
            .map(item => item * 2) /*?. */
            .reduce((result, item) => result + item); /*?*/

        assert.strictEqual(result, 30);
    });

});