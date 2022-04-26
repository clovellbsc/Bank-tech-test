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
}

bank = new BankAccount();
bank.deposit(500);
console.log(bank.transactionHistory);

module.exports = BankAccount;
