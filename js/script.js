/*
- il prezzo del biglietto è definito in base ai km (0.267113 € al km)
- va applicato uno sconto del 24.552% per gli under 21
- va applicato uno sconto del 37.893% per gli over 63.
*/

const userDistanceInputEl = document.querySelector('input#user-distance');
const userAgeInputEl = document.querySelector('input#user-age');
const formButtonEl = document.querySelector('div.user-form>button');
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
    } else if (userAge >= 63){
        discount = 37.893;
    }

    const ticketFullPrice = userDistance * pricePerKm;
    ticketPrice = (ticketFullPrice - (ticketFullPrice /100) * discount);
    
    console.log(ticketPrice.toFixed(2));
});