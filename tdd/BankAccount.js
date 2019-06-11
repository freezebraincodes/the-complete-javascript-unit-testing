const bankAccount = {
    name: 'Freeze',
    balance: 100,
}

module.exports = {
    getBalance(name) {
        if (name == bankAccount.name) {
            return bankAccount.balance;
        } else {
            return 0;
        }
    }
};