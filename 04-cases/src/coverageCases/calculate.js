/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function calculate (a, b) {
    if (a === 0 || b === 0) {
        return a || b;
    }

    return a + b;
}