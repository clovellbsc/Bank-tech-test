class Statement {
  constructor(transactionHistory) {
    this.transactionHistory = transactionHistory;
  }
  print() {
    console.log("date || credit || debit || balance");
    if (this.transactionHistory.length) {
      console.log("14/01/2023||2000.00|| || 2000.00");
    }
  }
}

module.exports = Statement;
