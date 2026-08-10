/**
 * Create a class `BankAccount` with a private field `#balance` initialized to 0 in the constructor. Add a method `deposit(amount)` that adds to #balance. Add a method `getBalance()` that returns #balance. Create an account, deposit 100, and log getBalance().
 */

// solution

// Create BankAccount class with private field
class BankAccount {
  #balance;
  constructor() {
    this.#balance = 0;
  }
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
// Create account, deposit, and log balance
const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());
