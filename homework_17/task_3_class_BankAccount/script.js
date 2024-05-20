class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        } else {
            return false;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        } else {
            return false;
        }
    }
}

const account = new BankAccount(1000);

document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.getElementById("balance");
    const amountElement = document.getElementById("amount");
    const depositButton = document.getElementById("deposit");
    const withdrawButton = document.getElementById("withdraw");
    const messageElement = document.getElementById("message");

    balanceElement.textContent = account.getBalance();

    depositButton.addEventListener("click", () => {
        const amount = parseFloat(amountElement.value);
        if (account.deposit(amount)) {
            balanceElement.textContent = account.getBalance();
            messageElement.textContent = "";
        } else {
            messageElement.textContent = "Invalid deposit amount.";
        }
    });

    withdrawButton.addEventListener("click", () => {
        const amount = parseFloat(amountElement.value);
        if (account.withdraw(amount)) {
            balanceElement.textContent = account.getBalance();
            messageElement.textContent = "";
        } else {
            messageElement.textContent = "Invalid withdraw amount or insufficient funds.";
        }
    });
});
