//event for login button to navigate annother page
function login(){
    //login details to get logged in, log in check
    const phnNumber = '01622299375';//predefined
    const pin = '1234';//predefined
    const phnNumberInput = document.getElementById('phn-input').value;//given number
    const pinInput = document.getElementById('pin-input').value;//given pin
    if(phnNumber === phnNumberInput && pin === pinInput){
        window.location.href='./home.html'
    }
    else{
        alert("Invalid Phone or pin, check Again");
    }

}
document.getElementById('btn-login').addEventListener('click',login);
document.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        login();
    }
});

