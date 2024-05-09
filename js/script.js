/*
- il prezzo del biglietto è definito in base ai km (0.267113 € al km)
- va applicato uno sconto del 24.552% per gli under 21
- va applicato uno sconto del 37.893% per gli over 63.
*/

const userDistanceInputEl = document.querySelector('input#user-distance');
const userAgeInputEl = document.querySelector('input#user-age');
const formButtonEl = document.querySelector('div.user-form>button');
const userDiscountEl = document.getElementById('user-discount');
const ticketPriceEl = document.getElementById('ticket-price');
let userDistance;
let userAge;
const pricePerKm = 0.267113;
let ticketPrice;

formButtonEl.addEventListener('click', function(){
    userDistance = Number.parseFloat(userDistanceInputEl.value);
    userAge = Number.parseInt(userAgeInputEl.value);

    let discount = 0;
    if (userAge < 21){
        discount = 24.552;
        userDiscountEl.classList.remove('d-none');
    } else if (userAge >= 63){
        discount = 37.893;
        userDiscountEl.classList.remove('d-none');
    }

    const ticketFullPrice = userDistance * pricePerKm;
    ticketPrice = (ticketFullPrice - (ticketFullPrice /100) * discount);
    
    console.log(ticketPrice.toFixed(2));
    if(ticketPrice > 0) {
        ticketPriceEl.classList.remove('d-none');
        ticketPriceEl.innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice.toFixed(2) + ' €';
    } else {
        ticketPriceEl.classList.remove('d-none');
        ticketPriceEl.innerHTML = 'Si è verificato un errore';
    }   
});