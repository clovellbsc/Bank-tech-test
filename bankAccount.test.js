const BankAccount = require("./bankAccount");
const Transaction = require("./transaction");

jest.mock("./transaction");

describe("BankAccount", () => {
  let bank;

  beforeEach(() => {
    Transaction.mockClear();
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

  it("should deposit a Transaction containing the amount into the transaction history", () => {
    bank.deposit(500);
    expect(Transaction).toHaveBeenCalledWith(500);
    expect(Transaction).toHaveBeenCalledTimes(1);
  });

  it("should be able to add a withdrawal into the transaction history", () => {
    bank.withdraw(500);
    expect(bank.transactionHistory).toHaveLength(1);
  });

  it("should be able to add a two withdrawals into the transaction history", () => {
    bank.withdraw(500);
    bank.withdraw(1000);
    expect(bank.transactionHistory).toHaveLength(2);
  });

  it("should withraw a Transaction containing the amount into the transaction history", () => {
    bank.withdraw(500);
    expect(Transaction).toHaveBeenCalledWith(500);
    expect(Transaction).toHaveBeenCalledTimes(1);
  });
});
