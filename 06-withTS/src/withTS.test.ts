import * as assert from 'assert';

import { SomeComponent } from './withTS';


describe('withTS', () => {

    it('some component render', () => {
        const instance = new SomeComponent();
        const id = 'holy';
        const text = 'js';

        const div = instance.render({
            id,
            text
        });

        assert.ok(div instanceof HTMLElement);
        assert.strictEqual(div.id, id);
        assert.strictEqual(
            div.childNodes[0].nodeValue,
            text
        );
    });

});



