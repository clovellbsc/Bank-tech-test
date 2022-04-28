const Transaction = require("./transaction");
const Statement = require("./Statement");

class BankAccount {
  constructor(statementClass = Statement, transactionClass = Transaction) {
    this.transactionHistory = [];
    this.statementClass = statementClass;
    this.transactionClass = transactionClass;
  }

  deposit(amount) {
    const deposit = new this.transactionClass(amount);
    deposit.deposit();
    this.transactionHistory.push(deposit);
  }

  withdraw(amount) {
    const withdrawal = new this.transactionClass(amount);
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
