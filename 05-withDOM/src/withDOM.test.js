

import assert from 'assert';

import { SomeComponent } from './withDOM';


describe('withDOM', () => {

    it('some component render', () => {
        const instance =  new SomeComponent();
        const id = 'Holy';
        const text = 'JS';

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

