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
        if(inputPin !== '1234'){
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
    })