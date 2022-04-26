const { CustomConsole } = require("@jest/console");

class Statement {
  constructor(transactionHistory) {
    this.transactionHistory = transactionHistory;
  }
  print() {
    this.#header();
    if (this.transactionHistory.length) {
      this.#formatForPrint();
    }
  }

  #header() {
    console.log("date || credit || debit || balance");
  }

  #formatForPrint() {
    this.transactionHistory.forEach((transaction, index) => {
      const deposit = transaction.deposit
        ? `${transaction.amount.toFixed(2)}|| `
        : ` ||${transaction.amount.toFixed(2)}`;
      console.log(
        `${
          transaction.date
        }||${deposit}|| ${this.#balanceUpToCurrentTransaction(index)}`
      );
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
