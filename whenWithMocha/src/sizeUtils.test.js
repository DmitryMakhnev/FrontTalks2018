import assert from 'assert';


import { calcMaxCenterSquareBounds } from './sizeUtils';


describe('size utils', () => {
    
    it('width more than height', () => {
        const result = calcMaxCenterSquareBounds(300, 100);
        assert.deepStrictEqual(
            result,
            {
                x: 100,
                y: 0,
                width: 100,
                height: 100
            }
        );
    });

    it('height more than width', () => {
        const result = calcMaxCenterSquareBounds(50, 100);
        assert.deepStrictEqual(
            result,
            {
                x: 0,
                y: 25,
                width: 50,
                height: 50
            }
        );
    });
    
});