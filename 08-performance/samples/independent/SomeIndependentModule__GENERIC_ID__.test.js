

import assert from 'assert';


import { SomeIndependentModule__GENERIC_ID__ } from './SomeIndependentModule__GENERIC_ID__';


describe('SomeIndependentModule__GENERIC_ID__', () => {

    it('.sum()', () => {
        const instance = new SomeIndependentModule__GENERIC_ID__(3, 8);
        assert.strictEqual(
            instance.sum(),
            11
        );
    });

    it('.multiply()', () => {
        const instance = new SomeIndependentModule__GENERIC_ID__(3, 8);
        assert.strictEqual(
            instance.multiply(),
            24
        );
    });

});

