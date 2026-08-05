/**
 * Create a function `createBankAccount` that takes an initial `balance`. Return an object with methods: `deposit(amount)` (adds to balance, returns new balance) and `getBalance()` (returns current balance). Create an account with balance 100, deposit 50, then log the balance.
 */

// solution

// Create createBankAccount function
function createBankAccount(bal) {
  let balance = bal;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
// Create account
const account = createBankAccount(100);
// Deposit and log
account.deposit(50);
console.log(account.getBalance());
