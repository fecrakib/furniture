let balance = 0;
const deposit = () => {
    let accountName = document.getElementById('account').value;
    const depositInput = document.getElementById('depositAmount');
    let depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if(isNaN(depositAmount)||depositAmount<=0){
        alert("Please enter a valid amount");
        return;
    }else{
        balance +=depositAmount;
        updateBalance();
        alert(`Deposit of $${depositAmount} successfully added`);
        depositInput.value="";
 
    }


};
const withdraw = () => {
    let accountName = document.getElementById('account').value;
    let withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    console.log(withdrawAmount)
    if(isNaN(withdrawAmount)||withdrawAmount<=0){
        alert("Please enter a valid amount");
        return;
    }else if(balance!==0)
        {
            balance -=withdrawAmount;
            updateBalance();
            alert(`$${withdraw} has completed.Now is ${balance}`);
            return;

        }
    }

const updateBalance = () => {
    document.getElementById('balance').value=balance.toFixed(2);
};
document.getElementById('depositButton').addEventListener('click', deposit);
document.getElementById('withdrawButton').addEventListener('click',withdraw);