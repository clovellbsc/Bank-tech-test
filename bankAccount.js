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
    const withdrawal = new Transaction(amount);
    this.transactionHistory.push(withdrawal);
  }
}

module.exports = BankAccount;
