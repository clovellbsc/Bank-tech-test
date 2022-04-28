const BankAccount = require("../src/bankAccount");

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

describe("BankAccount feature test", () => {
  let bank;
  beforeEach(() => {
    consoleSpy.mockClear();
    bank = new BankAccount();
  });

  it("should print the same value as expected in the client's requirements", () => {
    bank.deposit(1000);
    bank.deposit(2000);
    bank.withdraw(500);
    bank.printStatement();
    date = new Date().toLocaleDateString();

    expect(console.log).toHaveBeenCalledWith(`${date} || || 500.00 || 2500.00`);
    expect(console.log).toHaveBeenCalledWith(
      `${date} || 2000.00 || || 3000.00`
    );
    expect(console.log).toHaveBeenCalledWith(
      `${date} || 1000.00 || || 1000.00`
    );
  });
});
