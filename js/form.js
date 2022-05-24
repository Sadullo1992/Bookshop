let nameIsValid = false;
let surnameIsValid = false;
let dateIsValid = false;
let streetIsValid = false;
let houseNumberIsValid = false;
let flatNumberIsValid = false;
let paymentTypeIsValid = false;


let fragment = document.createDocumentFragment();

let form = document.createElement('form');
form.setAttribute('action', "");

let h1 = document.createElement('h1');
h1.textContent = 'Please, fill in the form for shipping';

let formContainer = document.createElement('div');
formContainer.classList.add('form-container');

let pN = document.createElement('p');
pN.textContent = 'Name*';

let inputName = document.createElement('input');
inputName.classList.add('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Your name');
inputName.addEventListener('keyup', (e) => nameValidation(e));

let pS = document.createElement('p');
pS.textContent = 'Surname*';

let inputSurname = document.createElement('input');
inputSurname.classList.add('input');
inputSurname.setAttribute('type', 'text');
inputSurname.setAttribute('placeholder', 'Your Surname');
inputSurname.addEventListener('keyup', (e) => surnameValidation(e));

let pD = document.createElement('p');
pD.textContent = 'Delivery date*';

let inputDate = document.createElement('input');
inputDate.classList.add('input');
inputDate.setAttribute('type', 'date');  
inputDate.addEventListener('input', (e) => dateValidation(e));

let pSt = document.createElement('p');
pSt.textContent = 'Street*';

let inputStreet = document.createElement('input');
inputStreet.classList.add('input');
inputStreet.setAttribute('type', 'text');
inputStreet.setAttribute('placeholder', 'Street');
inputStreet.addEventListener('keyup', (e) => streetValidation(e));

let pHN = document.createElement('p');
pHN.textContent = 'House number*';

let inputHouseNumber = document.createElement('input');
inputHouseNumber.classList.add('input');
inputHouseNumber.setAttribute('type', 'text');
inputHouseNumber.setAttribute('placeholder', 'House number');
inputHouseNumber.addEventListener('keyup', (e) => houseNumberValidation(e));

let pFN = document.createElement('p');
pFN.textContent = 'Flat number*';

let inputFlatNumber = document.createElement('input');
inputFlatNumber.classList.add('input');
inputFlatNumber.setAttribute('type', 'text');
inputFlatNumber.setAttribute('placeholder', 'Flat number');
inputFlatNumber.addEventListener('keyup', (e) => flatNumberValidation(e));

let pPayType = document.createElement('p');
pPayType.textContent = 'Choose the payment type:*';

let inputCash = document.createElement('input');
inputCash.setAttribute('type', 'radio');
inputCash.setAttribute('id', 'cash');
inputCash.setAttribute('value', 'Cash');
inputCash.setAttribute('name', 'paymentType');
inputCash.addEventListener('input', (e) => paymentTypeValidation(e));

let labelCash = document.createElement('label');
labelCash.setAttribute('for', 'cash');
labelCash.textContent = 'Cash';

let inputCard = document.createElement('input');
inputCard.setAttribute('type', 'radio');
inputCard.setAttribute('id', 'card');
inputCard.setAttribute('value', 'Card');
inputCard.setAttribute('name', 'paymentType');
inputCard.addEventListener('input', (e) => paymentTypeValidation(e));

let labelCard = document.createElement('label');
labelCard.setAttribute('for', 'card');
labelCard.textContent = 'Card';

let pGift = document.createElement('p');
pGift.textContent = 'Choose 2 gifts: (optional)';

let inputPack = document.createElement('input');
inputPack.setAttribute('type', 'checkbox');
inputPack.setAttribute('id', 'pack');
inputPack.setAttribute('value', 'pack as a gift');
inputPack.setAttribute('name', 'gifts');

let labelPack = document.createElement('label');
labelPack.setAttribute('for', 'pack');
labelPack.textContent = 'pack as a gift';

let inputPostcard = document.createElement('input');
inputPostcard.setAttribute('type', 'checkbox');
inputPostcard.setAttribute('id', 'postcard');
inputPostcard.setAttribute('value', 'add postcard');
inputPostcard.setAttribute('name', 'gifts');

let labelPostcard = document.createElement('label');
labelPostcard.setAttribute('for', 'postcard');
labelPostcard.textContent = 'add postcard';

let inputDiscount = document.createElement('input');
inputDiscount.setAttribute('type', 'checkbox');
inputDiscount.setAttribute('id', 'discount');
inputDiscount.setAttribute('value', 'provide 2% discount to the next time');
inputDiscount.setAttribute('name', 'gifts');

let labelDiscount = document.createElement('label');
labelDiscount.setAttribute('for', 'discount');
labelDiscount.textContent = 'provide 2% discount to the next time';

let inputPen = document.createElement('input');
inputPen.setAttribute('type', 'checkbox');
inputPen.setAttribute('id', 'pen');
inputPen.setAttribute('value', 'branded pen or pencil');
inputPen.setAttribute('name', 'gifts');

let labelPen = document.createElement('label');
labelPen.setAttribute('for', 'pen');
labelPen.textContent = 'branded pen or pencil';

let completeBtn = document.createElement('button');
completeBtn.setAttribute('type', 'button');
completeBtn.classList.add('btn', 'btn-disabled');
completeBtn.textContent = 'Complete';
completeBtn.addEventListener('click', () => {
    orderSummury(inputName.value, inputSurname.value, inputDate.value, inputStreet.value, inputHouseNumber.value, inputFlatNumber.value, document.querySelector('input[name="paymentType"]:checked').value) ;
    form.style.display = 'none';    
});


formContainer.append(pN);
formContainer.append(inputName);
formContainer.append(document.createElement('span'));
formContainer.append(pS);
formContainer.append(inputSurname);
formContainer.append(document.createElement('span'));
formContainer.append(pD);
formContainer.append(inputDate);
formContainer.append(document.createElement('span'));
formContainer.append(pSt);
formContainer.append(inputStreet);
formContainer.append(document.createElement('span'));
formContainer.append(pHN);
formContainer.append(inputHouseNumber);
formContainer.append(document.createElement('span'));
formContainer.append(pFN);
formContainer.append(inputFlatNumber);
formContainer.append(document.createElement('span'));
formContainer.append(pPayType);
formContainer.append(inputCash);
formContainer.append(labelCash);
// formContainer.append(document.createElement('span'));
formContainer.append(inputCard);
formContainer.append(labelCard);
formContainer.append(pGift);
formContainer.append(inputPack);
formContainer.append(labelPack);
formContainer.append(document.createElement('br'));
formContainer.append(inputPostcard);
formContainer.append(labelPostcard);
formContainer.append(document.createElement('br'));
formContainer.append(inputDiscount);
formContainer.append(labelDiscount);
formContainer.append(document.createElement('br'));
formContainer.append(inputPen);
formContainer.append(labelPen);
formContainer.append(document.createElement('br'));
formContainer.append(completeBtn);

    form.append(h1);
    form.append(formContainer);

    fragment.append(form);

    document.body.append(fragment);

window.addEventListener('DOMContentLoaded', () => {
    completeBtn.disabled = true;
});


// Enable Btn
const enableButton = () => {
    if( nameIsValid &&
        surnameIsValid &&
        dateIsValid &&
        streetIsValid &&
        houseNumberIsValid &&
        flatNumberIsValid &&
        paymentTypeIsValid) {
        completeBtn.disabled = false;
        completeBtn.classList.remove('btn-disabled');
        completeBtn.classList.add('btn--primary');
    }
    else {
        completeBtn.disabled = true;
        completeBtn.classList.add('btn-disabled');
        completeBtn.classList.remove('btn--primary');
    }
};

// Name Validation
function nameValidation(e) {
    if(e.target.value.match(/^[A-Za-z]+$/) && e.target.value.length > 3) {
        nameIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';        
    } else {
        nameIsValid = false; 
        e.target.nextSibling.innerText = 'The field is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}
// Surname validation
function surnameValidation(e) {
    if(e.target.value.match(/^[A-Za-z]+$/) && e.target.value.length > 4) {
        surnameIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';        
    } else {
        surnameIsValid = false; 
        e.target.nextSibling.innerText = 'The field is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}
// Delivery date validation
function dateValidation(e) {    
    let currentDate = new Date();
    let deliveryDate = new Date(e.target.value);

    if(deliveryDate.getTime() > currentDate.getTime()) {
        dateIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';  
    } else {
        dateIsValid = false; 
        e.target.nextSibling.innerText = 'The date is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}
// Street validation
function streetValidation(e) {
    if(e.target.value.match(/^[0-9a-zA-Z]+$/) && e.target.value.length > 4) {
        streetIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';        
    } else {
        streetIsValid = false; 
        e.target.nextSibling.innerText = 'The field is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}
// House number validation
function houseNumberValidation(e) {
    if(e.target.value.match(/^[1-9]+[0-9]*$/)) {
        houseNumberIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';        
    } else {
        houseNumberIsValid = false; 
        e.target.nextSibling.innerText = 'The field is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}
// Flat number validation
function flatNumberValidation(e) {
    if(e.target.value.match(/^[0-9]+(-[0-9]+)+$/) || e.target.value.match(/^[1-9]+[0-9]*$/)) {
        flatNumberIsValid = true;
        e.target.nextSibling.innerText = '';
        e.target.style.borderColor = '#00B8E0';        
    } else {
        flatNumberIsValid = false; 
        e.target.nextSibling.innerText = 'The field is invalid';
        e.target.style.borderColor = 'red';
    }
    enableButton();
}

// Payment type validation
function paymentTypeValidation(e) {
    if(e.target.checked) {
        paymentTypeIsValid = true;       
    } else {
        paymentTypeIsValid = false; 
    }
    enableButton();
}

// Oreder Summurize name, surname, date, street, house, flat, type
function orderSummury(name, surname, date, street, house, flat, type) {
    let fragment = document.createDocumentFragment();
    
    let summuryContainer = document.createElement('div');
    summuryContainer.classList.add('summury-container');

    let h1 = document.createElement('h1');
    h1.textContent = 'Thank you, The order has been created!';

    let pName = document.createElement('p');
    pName.innerHTML = `<b>Name:</b> ${name}`;

    let pSurname = document.createElement('p');
    pSurname.innerHTML = `<b>Surname:</b> ${surname}`;

    let pDate = document.createElement('p');
    pDate.innerHTML = `<b>Delivery date:</b> ${date}`;

    let pStreet = document.createElement('p');
    pStreet.innerHTML = `<b>Street:</b> ${street}`;

    let pHouse = document.createElement('p');
    pHouse.innerHTML = `<b>House number:</b> ${house}`;

    let pFlat = document.createElement('p');
    pFlat.innerHTML = `<b>Flat number:</b> ${flat}`;

    let pType = document.createElement('p');
    pType.innerHTML = `<b>Payment type:</b> ${type}`;

    summuryContainer.append(h1);
    summuryContainer.append(pName);
    summuryContainer.append(pSurname);
    summuryContainer.append(pDate);
    summuryContainer.append(pStreet);
    summuryContainer.append(pHouse);
    summuryContainer.append(pFlat);
    summuryContainer.append(pType);

    fragment.append(summuryContainer);
    document.body.append(fragment);
}

