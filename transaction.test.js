const { advanceBy, advanceTo, clear, version } = require("jest-date-mock");
const Transaction = require("./transaction");

describe("Transaction", () => {
  it("should initialise with the date", () => {
    advanceTo();
    const transaction = new Transaction();
    expect(transaction.date).toEqual(new Date(0));
  });
});
