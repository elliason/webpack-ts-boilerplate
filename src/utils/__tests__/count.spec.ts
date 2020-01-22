import count from '../count';

describe('count', () => {
    it('increments one number by another', () => {
        const a = 1;
        const b = 1;

        expect(count({ a, b })).toBe(2);
    });
});
