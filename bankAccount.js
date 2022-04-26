const Transaction = require("./transaction");
const Statement = require("./Statement");

class BankAccount {
  constructor(statementClass = Statement) {
    this.transactionHistory = [];
    this.statementClass = statementClass;
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

  printStatement() {
    const reverseChronologicalTransactionHistory =
      this.transactionHistory.reverse();
    const statement = new this.statementClass(
      reverseChronologicalTransactionHistory
    );
    statement.print();
  }
}

module.exports = BankAccount;
