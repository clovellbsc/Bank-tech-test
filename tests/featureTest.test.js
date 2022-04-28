const { advanceBy, advanceTo, clear, version } = require("jest-date-mock");
const BankAccount = require("../src/bankAccount");
const consoleSpy = jest.spyOn(console, "log").mockImplementation();

describe("BankAccount feature test", () => {
  let bank;
  beforeEach(() => {
    consoleSpy.mockClear();
    bank = new BankAccount();
  });

  it("should print the same value as expected in the client's requirements", () => {
    advanceTo();
    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);
    bank.printStatement();

    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance\n01/01/1970 || || 500.00 || 2500.00\n01/01/1970 || 2000.00 || || 3000.00\n01/01/1970 || 1000.00 || || 1000.00"
    );
  });
});
