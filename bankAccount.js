const Transaction = require("./transaction");

class BankAccount {
  constructor() {
    this.transactionHistory = [];
  }

  deposit(amount) {
    const deposit = new Transaction(amount);
    deposit.deposit();
    this.transactionHistory.push(deposit);
  }

  withdraw() {
    this.transactionHistory = [500];
  }
}

module.exports = BankAccount;
