import assert from 'assert';
import { calculate } from './calculate';


describe('calculate', () => {

    it('simple usage', () => {
        assert.strictEqual(2, calculate(2, 0));
    });

});