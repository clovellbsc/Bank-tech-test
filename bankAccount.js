class BankAccount {
  constructor() {
    this.transactionHistory = [];
  }

  deposit() {
    this.transactionHistory = [1];
  }
}

module.exports = BankAccount;
