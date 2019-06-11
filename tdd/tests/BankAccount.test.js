const { getBalance } = require('../BankAccount');

describe('BankAccount', () => {
    it('should get the balance of the user', () => {
        expect(100).toBe(getBalance('Freeze'));
    });

    it('should return 0 balance of other user', () => {
        expect(0).toBe(getBalance('Ethan'));
    });
});