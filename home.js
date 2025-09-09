const transactionData = [];
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
        //checking amount 
        if(addAmount<=0){
            alert('Invalid Amount! Enter a valid amount..');
            return;
        }
        // checking account number is 11 digit or not 
        if (accountNumber.length >= 11) {
            // add the balance 
            const newAmount = availableBalance + addAmount;
            // set it to available balance;
            document.getElementById('available-balance').innerText = newAmount;
            const data = {
                name: 'Add Money',
                date: new Date().toLocaleTimeString(),
            }
            transactionData.push(data);
        }
        else {
            alert('Please, provide valid account number')
            return;
        }
    });

// reuseable function 
function displayOnly(id) {
    const cards = document.getElementsByClassName('form');
    for (const card of cards) {
        card.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}


function toggleColor(id) {
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
        card.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        card.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

// add money form event listner hide
document.getElementById('add-money').addEventListener('click', function () {
    // const addMoneyForm = document.getElementById('add-money-form');
    // const transferForm = document.getElementById('transfer-form');
    // const cashOutForm = document.getElementById('cash-out-form');
    // const getBonusForm = document.getElementById('get-bonus-form');
    // const payBillForm = document.getElementById('pay-bill-form');
    // addMoneyForm.style.display = 'block';
    // payBillForm.style.display = 'none';
    // transferForm.style.display = 'none';
    // cashOutForm.style.display = 'none';
    // getBonusForm.style.display = 'none';
    displayOnly('add-money-form');
    toggleColor('add-money')
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
    if(inputWithdraw <= 0){
        alert('Invalid Amount !! Please enter a valid Amount...!');
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

            const data = {
                name: 'Cash Out',
                date: new Date().toLocaleTimeString(),
            }
            transactionData.push(data);
        }
    }
    else {
        alert('Please, provide valid account number');
        return;
    }
});

//cash out form event listner for hide 
document.getElementById('cash-out').addEventListener('click', function () {
    displayOnly('cash-out-form');
    toggleColor('cash-out');
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
        alert("Insufficient Balance!!"); return;
    }
    //amount checking 
    if(transferAmount <= 0){
        alert('Invalid Amount !! Please enter a valid Amount...!');
        return;
    }
    //account length checking
    if (accountNumber.length < 11) {
        alert('Enver a valid account number')
        return;
    }
    //pin checking 
    if (inputPin !== pin) {
        alert('Invalid pin!'); return;
    }
    //transfer 
    if (inputPin === pin && accountNumber.length >= 11 && availableBalance >= transferAmount) {
        const remainingBalance = availableBalance - transferAmount;
        //set the balance to wallet
        document.getElementById('available-balance').innerText = remainingBalance;

        const data = {
            name: 'Transfer Money',
            date: new Date().toLocaleTimeString(),
        }
        transactionData.push(data);
    }

})

//event for transfer and hide all 
document.getElementById('transfer-money').addEventListener('click', function (event) {
    displayOnly('transfer-form');
    toggleColor('transfer-money');

})

//get bonus function and event listner

document.getElementById('btn-bonus').addEventListener('click', function (event) {
    const data = {
        name: 'Get Bonus',
        date: new Date().toLocaleTimeString(),
    }
    transactionData.push(data);
})
//get bonus form event for hide 

document.getElementById('get-bonus').addEventListener('click', function (event) {
    displayOnly('get-bonus-form');
    toggleColor('get-bonus');
})

//pay Bill add event listner to pay bill

document.getElementById('btn-pay-bill').addEventListener('click', function (event) {
    event.preventDefault();
    const pin = '1234';
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
    const payableBill = parseFloat(document.getElementById('bill-amount').value);
    const inputPin = document.getElementById('bill-pin').value;
    const accountNumber = document.getElementById('biller-acc-number').value;
    const billType = document.getElementById('bill-type').value;
    //pin check
    if (inputPin !== pin) {
        alert('Invalid Pin!! Give The corrent pin');
        return;
    }
    //amount checking 
    if(payableBill <= 0){
        alert('Invalid Amount !! Please enter a valid Amount...!');
        return
    }
    //balance check
    if (availableBalance < payableBill) {
        alert('Insufficient Balance!!');
        return
    }
    if (inputPin === pin && availableBalance > payableBill) {
        const remainingBalance = availableBalance - payableBill;
        document.getElementById('available-balance').innerText = remainingBalance;

        const data = {
            name: 'Bill Pay',
            date: new Date().toLocaleTimeString(),
        }
        transactionData.push(data);
    }
});


//event for Paybill and hide all 
document.getElementById('pay-bill').addEventListener('click', function (event) {
    displayOnly('pay-bill-form');
    toggleColor('pay-bill');
});

//transection history function event 

document.getElementById('transaction').addEventListener('click', function (event) {
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
    for (const data of transactionData) {
        const transaction = document.createElement('div');
        transaction.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center ">
                    <div class="p-3 border-2 border-gray-400 rounded-full bg-[#f4f5f7]">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-4">
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>`;
        transactionContainer.appendChild(transaction);
    }
})

// transection toggoling 
document.getElementById('transaction').addEventListener('click', function (event) {
    displayOnly('transaction-form');
    toggleColor('transaction');
});



//logout function

document.getElementById('logout').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './index.html'

});

