const { CustomConsole } = require("@jest/console");

class Statement {
  constructor(transactionHistory) {
    this.transactionHistory = transactionHistory;
  }
  print() {
    this.#header();
    if (this.transactionHistory.length) {
      this.#iterator();
    }
  }

  #header() {
    console.log("date || credit || debit || balance");
  }

  #iterator() {
    let balance = 0;
    this.transactionHistory.forEach((transaction, index) => {
      if (transaction.deposit) {
        balance += transaction.amount;
        console.log(
          `${transaction.date}||${transaction.amount.toFixed(
            2
          )}|| || ${this.#balanceUpToCurrentTransaction(index)}`
        );
      } else {
        balance -= transaction.amount;
        console.log(
          `${transaction.date}|| ||${transaction.amount.toFixed(
            2
          )}|| ${this.#balanceUpToCurrentTransaction(index)}`
        );
      }
    });
  }

  #balanceUpToCurrentTransaction(index) {
    const transactions = this.transactionHistory.slice(index);
    let balance = 0;
    transactions.forEach((transaction) => {
      if (transaction.deposit) {
        balance += transaction.amount;
      } else {
        balance -= transaction.amount;
      }
    });
    return balance.toFixed(2);
  }
}

module.exports = Statement;
