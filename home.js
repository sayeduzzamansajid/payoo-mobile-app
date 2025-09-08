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

// add money form event listner
document.getElementById('add-money').addEventListener('click', function () {
    // console.log('addmoney clicked')
    const addMoneyForm = document.getElementById('add-money-form');
    addMoneyForm.style.display = 'block';
    const hide = document.getElementById('cash-out-form');
    hide.style.display = 'none';
});

//cash out form event listner 
document.getElementById('cash-out').addEventListener('click', function () {
    // console.log('addmoney clicked')
    const cashOutForm = document.getElementById('cash-out-form');
    cashOutForm.style.display = 'block';
    const chide = document.getElementById('add-money-form');
    chide.style.display = 'none';
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
        const totalAmount = wavailableBalance - inputWithdraw;
        // set available balance to wallet
        document.getElementById('available-balance').innerText = totalAmount;
    }
    else {
        alert('Please, provide valid account number')
        return;
    }
});