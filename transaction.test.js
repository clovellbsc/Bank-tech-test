const { advanceBy, advanceTo, clear, version } = require("jest-date-mock");
const Transaction = require("./transaction");

describe("Transaction", () => {
  it("should initialise with the date", () => {
    advanceTo();
    const transaction = new Transaction();
    expect(transaction.date).toEqual(new Date(0).toLocaleDateString());
  });

  it("should initialise with an amount", () => {
    const transaction = new Transaction(500);
    expect(transaction.amount).toEqual(500);
  });

  it("should initialise with an amount equal to the value passed in", () => {
    const transaction = new Transaction(800);
    expect(transaction.amount).toEqual(800);
  });

  it("should initialise with isDeposit set to false", () => {
    const transaction = new Transaction(800);
    expect(transaction.isDeposit).toEqual(false);
  });

  it("should change the state of isDeposit when the deposit method is called", () => {
    const transaction = new Transaction(800);
    transaction.deposit();
    expect(transaction.isDeposit).toEqual(true);
  });
});
