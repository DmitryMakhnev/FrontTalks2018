

import assert from 'assert';


import { SomeDependentModule__GENERIC_ID__ } from './SomeDependentModule__GENERIC_ID__';


describe('SomeModule_$NAME$_', () => {

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

