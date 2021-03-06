class Transaction {
  constructor(amount) {
    this.date = new Date().toLocaleDateString();
    this.amount = amount;
    this.isDeposit = false;
  }

  deposit() {
    this.isDeposit = true;
  }
}

module.exports = Transaction;
