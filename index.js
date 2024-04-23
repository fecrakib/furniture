let balance = 0;

document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click', withdraw);

function deposit() {
    const accountName = document.getElementById('account').value;
    const depositAmount = parseFloat(prompt('Enter deposit amount:'));
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }
    balance += depositAmount;
    updateBalance();
    alert(`Deposit of $${depositAmount} successful. New balance: $${balance}`);
}

function withdraw() {
    const accountName = document.getElementById('account').value;
    const withdrawAmount = parseFloat(prompt('Enter withdrawal amount:'));
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    if (withdrawAmount > balance) {
        alert('Insufficient funds.');
        return;
    }
    balance -= withdrawAmount;
    updateBalance();
    alert(`Withdrawal of $${withdrawAmount} successful. New balance: $${balance}`);
}

function updateBalance() {
    document.getElementById('balance').value = balance;
}
