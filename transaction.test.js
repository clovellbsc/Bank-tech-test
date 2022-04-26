const { expect } = require("expect");
const { advanceBy, advanceTo, clear, version } = require("jest-date-mock");
const Transaction = require("./transaction");

describe("Transaction", () => {
  it("should initialise with the date", () => {
    advanceTo();
    const transaction = new Transaction();
    expect(transaction.date).toEqual(new Date(0));
  });

  it("should initialise with an amount", () => {
    const transaction = new Transaction(500);
    expect(transaction.amount).toEqual(500);
  });
});
