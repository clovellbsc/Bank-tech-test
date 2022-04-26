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

  withdraw(amount) {
    this.transactionHistory.push(amount);
  }
}

module.exports = BankAccount;
