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
});
