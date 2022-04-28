class Statement {
  constructor(transactionHistory) {
    this.transactionHistory = transactionHistory.reverse();
  }

  print() {
    this.transactionHistory.length
      ? console.log(this.#header() + "\n" + this.#formatForPrint())
      : console.log(this.#header());
  }

  #header() {
    return "date || credit || debit || balance";
  }

  #formatForPrint() {
    const formattedTransactions = this.transactionHistory.map(
      (transaction, index) => {
        return this.#formatTransaction(transaction, index);
      }
    );
    return formattedTransactions.join("\n");
  }

  #formatTransaction(transaction, index) {
    return `${transaction.date} || ${this.#checkForDepositFormatting(
      transaction
    )} || ${this.#balanceUpToCurrentTransaction(index)}`;
  }

  #checkForDepositFormatting(transaction) {
    return transaction.isDeposit
      ? `${transaction.amount.toFixed(2)} ||`
      : `|| ${transaction.amount.toFixed(2)}`;
  }

  #balanceUpToCurrentTransaction(index) {
    const transactions = this.transactionHistory.slice(index);
    return this.#balanceOfTransactions(transactions);
  }

  #balanceOfTransactions(transactionArray) {
    const balances = transactionArray.map((transaction) =>
      this.#balanceOfTransaction(transaction)
    );
    return this.#sumArray(balances);
  }

  #balanceOfTransaction(transaction) {
    return transaction.isDeposit ? transaction.amount : -transaction.amount;
  }

  #sumArray(array) {
    return array
      .reduce((total, currentBalance) => total + currentBalance)
      .toFixed(2);
  }
}

module.exports = Statement;
