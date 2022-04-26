const Statement = require("./Statement");

jest.spyOn(console, "log").mockImplementation();

describe("PrintStatement", () => {
  it("should print a heading of 'date || credit || debit || balance'", () => {
    const statement = new Statement();
    statement.print();
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenLastCalledWith(
      "date || credit || debit || balance"
    );
  });
});
