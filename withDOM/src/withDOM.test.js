import assert from 'assert';

import { SomeComponent } from './withDOM';


describe('withDOM', () => {

    it('some component init', () => {
        const instance =  new SomeComponent();
        const testId = 'Holy';
        const testText = 'JS';

        const div = instance.render({
            id: testId,
            text: testText
        });

        assert.strictEqual(div.id, testId);
        assert.strictEqual(
            div.childNodes[0].nodeValue,
            testText
        );
    });
});