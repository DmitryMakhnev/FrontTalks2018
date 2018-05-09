import * as assert from 'assert';

import { Girl, Boy } from "./withTSAndLove";

function printBoyData(boy: Boy) : string {
    return `${boy.name} ${boy.age}`;
}

describe('withTSAndLove', () => {
    
    it('S as soundness', () => {
        const girlInstance: Girl = new Girl('Sally', 21);

        assert.strictEqual(
            printBoyData(girlInstance),
            'Sally 21'
        );
    });
    
});