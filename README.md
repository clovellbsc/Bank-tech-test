# Bank-tech-test

<img width="282" alt="Screenshot 2022-04-26 at 23 13 28" src="https://user-images.githubusercontent.com/93338557/165401408-5b5c2080-c81e-4d31-89a8-53fcc4ebe7b1.png">

## Client Specification

### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance Criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Setup

Copy the following code into your terminal and hit enter

```
git clone https://github.com/clovellbsc/Bank-tech-test.git
```

Change directory into the project by copying the following code into your terminal and hitting enter

```
cd Bank_tech_test
```

## Ensuring Dependencies Are Installed

if you do not have node installed on your device you can go to the [NPM documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "NPM documentation")

if/once you have node installed on your device copy the following code and hit enter

```
npm install
```

## Running The Application

Change directory into the src folder, copy the following into your terminal and hit enter

```
cd src
```

The application is run through a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop "REPL") called [Node](https://nodejs.org/en/ "Node"). To run node, copy the following into your terminal and hit enter

```
node
```

You will then need to load the Bank Account class through node by copying the following and hitting enter

```
.load ./bankAccount.js
```

Once the Bank Account class has been loaded you need to create a bank account instance by copying the following and hitting enter

```
const account = new BankAccount
```

Now that you have an account you can choose one of the following options:

- Deposit (in this example £1000)

```
account.deposit(1000)
```

- Withdraw (in this example £500)

```
account.withdraw(500)
```

- Print Statment

```
account.printStatement()
```

The following would be printed after completing the above examples

```
date || credit || debit || balance
26/04/2022 || || 500.00 || 500.00
26/04/2022 || 1000.00 || || 1000.00
```

## Running Tests

If you are currently in the src folder, which you will be if you followed the instructions for Running The Application, then copy the following into your terminal and hit enter

```
cd ..
```

To run the test, which were written using [Jest](https://jestjs.io/ "Jest"), copy the following code into your terminal and hit enter

```
jest
```

To get test coverage copy the following code into your terminal and hit enter

```
jest --coverage
```

The coverage is 100% for this project, as displayed below
----------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files | 100 | 100 | 100 | 100 |  
 Statement.js | 100 | 100 | 100 | 100 |  
 bankAccount.js | 100 | 100 | 100 | 100 |  
 transaction.js | 100 | 100 | 100 | 100 |  
----------------|---------|----------|---------|---------|-------------------

## Technologies Used

- JavaScript - chosen programming language
- Git - version control
- Node.js - JS runtime environment
- Jest - unit and feature testing, including coverage
- jest-date-mock - mocking global Date object for tests
- ESLint - linting

## My Approach

I approached this task, firstly by planning. This step was the most important to me, to ensure I understood what the client wanted as their output and to ensure that I went about it in a measured way.

- I decided to implement three classes
  - Bank Account - In charge of the ability to create transactions and creating a statement
  - Transaction - To store the data of each i.e. whether deposit or withdrawal, amount and date occurred
  - Statement - this is to format the data for displaying in the REPL

I decided to implement these three classes to adhere to the single responsibility principle. Transctions and Statements are managed by the bank account class.

### Transaction

This class has been structured to simply hold information. It stores the amount of the transaction, the date the transaction was implemented and whether the transaction was a deposit or not. This could have been stored as an object in the Bank Account class, however to stick to the single responsibility principle and to achieve separation of concerns, I believe this would be better suited to a separate class.

### Bank Account

I decided to implement a simple structure for this class. This class manages the other classes with three short methods. Transactions are implemented and stored in an array that can be used to create a statement.

In essence this class is structured to be the controller of the other classes.

### Statement

This class essentially handles the views component of the Application. The data passed in is the transaction history of the bank account, which is formatted for the view and printed to it. I believed this was necessary to stick to the single responsibility principle and to achieve separation of concerns
