/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(name) {
    
    // Write logic here   
      let accountBalance = 0;
      
      return {
        depositMoney: function (amount) {
          accountBalance += amount;
        },
        withdrawMoney: function (amount) {
          accountBalance -= amount;
        },
        getBalance: function () {
          console.log(`${name} your account has ${accountBalance}`);
        }
      }
    }
    
    const daveAccount = createBankAccount("Dave");
    const wendyAccount = createBankAccount("Wendy");
    
    daveAccount.depositMoney(10000);
    daveAccount.getBalance();
    daveAccount.depositMoney(2000);
    daveAccount.getBalance();
    daveAccount.withdrawMoney(900);
    daveAccount.getBalance();
    daveAccount.getBalance();
    
    // Test your code by calling the functions.