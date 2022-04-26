const { expect } = require("expect");
const BankAccount = require("./bankAccount");

describe("BankAccount", () => {
  let bank;

  beforeEach(() => {
    bank = new BankAccount();
  });

  it("should initialise with an empty transaction history", () => {
    expect(bank.transactionHistory).toEqual([]);
  });

  it("should be able to add a deposit into the transaction history", () => {
    bank.deposit(500);
    expect(bank.transactionHistory).toHaveLength(1);
  });

  it("should be able to add a two deposits into the transaction history", () => {
    bank.deposit(500);
    bank.deposit(1000);
    expect(bank.transactionHistory).toHaveLength(2);
  });
});
