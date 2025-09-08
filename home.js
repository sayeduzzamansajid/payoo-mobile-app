// add money function to add doller
document.getElementById('btn-addMoney')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const bank = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = parseFloat(document.getElementById('add-amount').value);
        const inputPin = document.getElementById('add-pin').value;
        // get available balance;
        const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
        //checking pin number corrent or not 
        if (inputPin !== '1234') {
            alert('Please, provide valid pin number')
            return;
        }
        // checking account number is 11 digit or not 
        if (accountNumber.length >= 11) {
            // add the balance 
            const newAmount = availableBalance + addAmount;
            // set it to available balance;
            document.getElementById('available-balance').innerText = newAmount;
        }
        else {
            alert('Please, provide valid account number')
            return;
        }
    });

// add money form event listner hide
document.getElementById('add-money').addEventListener('click', function () {
    const addMoneyForm = document.getElementById('add-money-form');
    const transferForm = document.getElementById('transfer-form');
    const cashOutForm = document.getElementById('cash-out-form');
    const getBonusForm = document.getElementById('get-bonus-form');
    const payBillForm = document.getElementById('pay-bill-form');
    addMoneyForm.style.display = 'block';
    payBillForm.style.display = 'none';
    transferForm.style.display = 'none';
    cashOutForm.style.display = 'none';
    getBonusForm.style.display = 'none';
});

// withdraw money function to withdraw doller from wallet
document.getElementById('btn-withdraw-money').addEventListener('click', function () {
    const inputWithdraw = parseFloat(document.getElementById('withdraw-amount').value);//withdraw amount 
    const wavailableBalance = parseFloat(document.getElementById('available-balance').innerText);//available balance 
    const agentNumber = document.getElementById('agent-number').value
    const winputPin = document.getElementById('wadd-pin').value;//pin number

    //checking pin number corrent or not 
    if (winputPin !== '1234') {
        alert('Please, provide valid pin number')
        return;
    }
    // checking account number is 11 digit or not 
    if (agentNumber.length >= 11) {
        //withdraw money calculation
        if (wavailableBalance < inputWithdraw) {
            alert("insufficient balance");
            return;
        }
        else {
            const totalAmount = wavailableBalance - inputWithdraw;
            // set available balance to wallet
            document.getElementById('available-balance').innerText = totalAmount;
        }
    }
    else {
        alert('Please, provide valid account number');
        return;
    }
});

//cash out form event listner for hide 
document.getElementById('cash-out').addEventListener('click', function () {
    const cashOutForm = document.getElementById('cash-out-form');
    const transferForm = document.getElementById('transfer-form');
    const addMoneyForm = document.getElementById('add-money-form');
    const getBonusForm = document.getElementById('get-bonus-form');
    const payBillForm = document.getElementById('pay-bill-form');
    cashOutForm.style.display = 'block';
    payBillForm.style.display = 'none';
    transferForm.style.display = 'none';
    addMoneyForm.style.display = 'none';
    getBonusForm.style.display = 'none';
});


//transfer money event listner 

document.getElementById('btn-transfer').addEventListener('click', function (event) {
    event.preventDefault();
    pin = '1234'
    // get the available balence 
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
    //get the transfered amount 
    const transferAmount = parseFloat(document.getElementById('transfer-amount').value)
    //get the pin
    const inputPin = document.getElementById('t-pin').value;
    //get the account number 
    const accountNumber = document.getElementById('transfer-acc-number').value;
    //balance checking 
    if (availableBalance < transferAmount) {
        alert("Insufficient Balance!!");return;
    }
    if(accountNumber.length < 11){
        alert('Enver a valid account number')
        return;
    }
    //pin checking 
    if(inputPin !== pin){
        alert('Invalid pin!');return;
    }
    //transfer 
    if (inputPin === pin && accountNumber.length >= 11 && availableBalance >= transferAmount) {
        const remainingBalance = availableBalance - transferAmount;
        //set the balance to wallet
        document.getElementById('available-balance').innerText = remainingBalance;
    }
    
})

//event for transfer and hide all 
document.getElementById('transfer-money').addEventListener('click',function(event){
    const transferForm = document.getElementById('transfer-form');
    const addMoneyForm = document.getElementById('add-money-form');
    const cashOutForm = document.getElementById('cash-out-form');
    const getBonusForm = document.getElementById('get-bonus-form');
    const payBillForm = document.getElementById('pay-bill-form');
    transferForm.style.display = 'block';
    payBillForm.style.display = 'none';
    addMoneyForm.style.display = 'none';
    cashOutForm.style.display = 'none';
    getBonusForm.style.display = 'none';
});

//get bonus function and event listner


//get bonus form event for hide 

document.getElementById('get-bonus').addEventListener('click',function(event){
    const getBonusForm = document.getElementById('get-bonus-form');
    const transferForm = document.getElementById('transfer-form');
    const addMoneyForm = document.getElementById('add-money-form');
    const cashOutForm = document.getElementById('cash-out-form');
    const payBillForm = document.getElementById('pay-bill-form');
    getBonusForm.style.display = 'block';
    payBillForm.style.display = 'none';
    transferForm.style.display = 'none';
    addMoneyForm.style.display = 'none';
    cashOutForm.style.display = 'none';
})

//pay Bill add event listner to pay bill

document.getElementById('btn-pay-bill').addEventListener('click',function(event){
    event.preventDefault();
    const pin = '1234';
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
    const payableBill = parseFloat(document.getElementById('bill-amount').value);
    const inputPin = document.getElementById('bill-pin').value;
    const accountNumber = document.getElementById('biller-acc-number').value;
    const billType = document.getElementById('bill-type').value;
    //pin check
    if(inputPin !== pin){
        alert('Invalid Pin!! Give The corrent pin');
        return;
    }
    //balance check
    if(availableBalance < payableBill){
        alert('Insufficient Balance!!');
        return
    }
    if(inputPin === pin && availableBalance > payableBill){
        const remainingBalance = availableBalance - payableBill;
        document.getElementById('available-balance').innerText = remainingBalance;
    }
});


//event for Paybill and hide all 
document.getElementById('pay-bill').addEventListener('click',function(event){
    const payBillForm = document.getElementById('pay-bill-form');
    const transferForm = document.getElementById('transfer-form');
    const addMoneyForm = document.getElementById('add-money-form');
    const cashOutForm = document.getElementById('cash-out-form');
    const getBonusForm = document.getElementById('get-bonus-form');
    payBillForm.style.display = 'block';
    transferForm.style.display = 'none';
    addMoneyForm.style.display = 'none';
    cashOutForm.style.display = 'none';
    getBonusForm.style.display = 'none';
});