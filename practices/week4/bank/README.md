# BankAccount Requirements

## Class: BankAccount

### Properties:
- `accountNumber`: stores the account number (default is 0).
- `ownerName`: stores the name of the account owner.
- `balance`: stores the current balance (initialized to 0.0).
- `transactions`: stores a list of transaction records (initialized to an empty array).

### Methods:
- **constructor(accountNumber = 0, ownerName)**:
  - Initializes a new BankAccount object.
  - Sets `accountNumber` from the parameter.
  - Sets `ownerName` from the parameter.
  - Initializes `balance` to zero.
  - Initializes `transactions` as an empty array.

- **deposit(money)**:
  - Adds the specified amount of `money` to the balance.
  - Logs the transaction in the format `deposit: amount`.
  - Returns the updated balance.

- **withdraw(money)**:
  - Deducts the specified amount of `money` from the balance if sufficient funds are available.
  - Logs the transaction in the format `withdraw: amount`.
  - Returns the updated balance.
  - If there are insufficient funds, prints a message and does not modify the balance.

- **getBalance()**:
  - Returns the current balance.

- **getTransaction()**:
  - Returns the list of transactions.

