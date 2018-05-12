

import { multiply, sum } from './dependency';


export class SomeDependentModule__GENERIC_ID__ {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    sum() {
        return sum(this.a, this.b);
    }

    multiply() {
        return multiply(this.a, this.b);
    }

}

