import assert from 'assert';

import { SomeComponent } from './withDOM';


describe('withDOM', () => {

    it('some component render', () => {
        const instance =  new SomeComponent();
        const testId = 'Holy';
        const testText = 'JS';

        const div = instance.render({
            id: testId,
            text: testText
        });

        assert.ok(div instanceof HTMLElement);
        assert.strictEqual(div.id, testId);
        assert.strictEqual(
            div.childNodes[0].nodeValue,
            testText
        );
    });
});