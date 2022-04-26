class BankAccount {
  constructor() {
    this.transactionHistory = [];
  }

  deposit(amount) {
    this.transactionHistory.push(amount);
  }
}

module.exports = BankAccount;
