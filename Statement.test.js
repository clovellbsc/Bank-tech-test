const Statement = require("./Statement");

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

describe("PrintStatement", () => {
  let arrayOfObjects;
  let arrayOneObject;

  beforeEach(() => {
    arrayOfObjects = [];
    arrayOneObject = [{ date: "14/01/2023", amount: 2000, deposit: true }];
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
      "14/01/2023||2000.00|| || 2000.00"
    );
  });
});
