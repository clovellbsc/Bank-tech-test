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
      console.log(this.#formatTransaction(transaction, index));
    });
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
