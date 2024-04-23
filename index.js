let balance = 0;
const deposit = () => {
    let accountName = document.getElementById('account').value;
    const depositInput = document.getElementById('depositAmount');
    
    let depositAmount = parseFloat(depositInput.value);
    if(isNaN(depositAmount)||depositAmount<=0){
        alert("Please enter a valid amount");
        return;
    }else{
        balance +=depositAmount;
        updateBalance();
      
        alert(`Deposit of $${depositAmount} successfully added`);
       depositInput.value="";
        return;
    
      
 
    }


};


const withdraw = () => {
    let accountName = document.getElementById('account').value;
    const withdrawInput = document.getElementById('withdrawAmount');
    const withdrawAmount = parseFloat(withdrawInput.value);
    console.log(withdrawAmount)
    if(isNaN(withdrawAmount)||withdrawAmount<=0){
        alert("Please enter a valid amount");
        return;
    }
   
    if(withdrawAmount > balance)
        {
            alert('Insufficient funds.');
            return;

        }else{
            balance -= withdrawAmount;
            updateBalance();
            alert(`Withdrawal of $${withdrawAmount} successful. New balance: $${balance}`);
            withdrawInput.value = ''; // Clear the input after the operation
        }
    }


    const updateBalance = () => {
        document.getElementById('balance').value=balance.toFixed(2);
    };

document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click',withdraw);