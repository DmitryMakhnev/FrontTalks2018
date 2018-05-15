

import assert from 'assert';


import { SomeDependentModule__GENERIC_ID__ } from './SomeDependentModule__GENERIC_ID__';


describe('SomeDependentModule__GENERIC_ID__', () => {

    it('.sum()', () => {
        const instance = new SomeDependentModule__GENERIC_ID__(3, 8);
        assert.strictEqual(
            instance.sum(),
            11
        );
    });

    it('.multiply()', () => {
        const instance = new SomeDependentModule__GENERIC_ID__(3, 8);
        assert.strictEqual(
            instance.multiply(),
            24
        );
    });

});

