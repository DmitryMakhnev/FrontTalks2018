import * as assert from 'assert';

import { Girl, Boy } from "./withTSAndNode";


describe('withTSAndNode', () => {
    
    it('S as soundness', () => {
        const girlInstance: Girl = new Girl('Sally', 21);

        assert.strictEqual(
            Boy.serialize(girlInstance),
            'Name: Sally; Age: 21;'
        );
    });
    
});