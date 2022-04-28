const Statement = require("../src/Statement");

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

describe("Statement", () => {
  let arrayOfObjects;
  let arrayOneObject;
  beforeEach(() => {
    arrayOfObjects = [
      { date: "10/01/2023", amount: 1000, isDeposit: true },
      { date: "13/01/2023", amount: 2000, isDeposit: true },
      { date: "14/01/2023", amount: 500, isDeposit: false },
    ];
    arrayOneObject = [{ date: "14/01/2023", amount: 2000, isDeposit: true }];
    consoleSpy.mockClear();
  });

  it("should print a heading of 'date || credit || debit || balance'", () => {
    const statement = new Statement([]);
    statement.print();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance"
    );
  });

  it("should take array containing an object and print out it's date and amount in the following format: '14/01/2023||2000.00|| || 2000.00'", () => {
    const statement = new Statement(arrayOneObject);
    statement.print();

    expect(console.log).toBeCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenLastCalledWith(
      "14/01/2023 || 2000.00 || || 2000.00"
    );
  });

  it("should take array containing multiple objects and print it in format", () => {
    const statement = new Statement(arrayOfObjects);
    statement.print();

    expect(console.log).toBeCalledTimes(4);
    expect(console.log).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
    expect(console.log).toHaveBeenCalledWith(
      "14/01/2023 || || 500.00 || 2500.00"
    );
    expect(console.log).toHaveBeenCalledWith(
      "13/01/2023 || 2000.00 || || 3000.00"
    );
    expect(console.log).toHaveBeenLastCalledWith(
      "10/01/2023 || 1000.00 || || 1000.00"
    );
  });
});
