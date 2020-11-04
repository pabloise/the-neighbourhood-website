function isValidFullName(fullName) {
    var fullNameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if (fullName.length < 6 || !fullName.match(fullNameRegex)) {
        return false;
    }
    return true;
}

function validateFullName (event) {
    var name = event.target.value;
    if (!isValidFullName(name)) {
        var fullNameError = event.target.nextElementSibling;
        fullNameError.classList.replace('hideError', 'showError');
    }
}

function isValidEmail (email) {
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailFormat)) {
        return false;
    }
    return true;
}

function validateEmail(event) {
    var email = event.target.value;
    if (!isValidEmail(email)) {
        var emailError = event.target.nextElementSibling;
        emailError.classList.replace('hideError', 'showError');
    }
}

function isValidPassword (password) {
    var passwordFormat = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,50})$/;
    if (password.length < 8 || !password.match(passwordFormat)){
        return false;
    }
    return true;
}

function validatePassword (event) {
    var password = event.target.value;
    if (!isValidPassword(password)) {
        var passwordError = event.target.nextElementSibling;
        passwordError.classList.replace('hideError', 'showError');
    }
}

function isValidComparePassword (repitePassword) {
    if (password.value !== repitePassword) {
        return false;
    }
    return true;
}

function comparePassword (event) {
    var repitePassword = event.target.value;
    if (!isValidComparePassword(repitePassword)) {
        var passwordError = event.target.nextElementSibling;
        passwordError.classList.replace('hideError', 'showError');
    }
}

function isValidAge (age) {
    var ageFormat = /[a-zA-Z]/;
    if(age < 18 && !age.match(ageFormat)) {
        return false;
    }
    return true;
}

function validateAge (event) {
    var age = event.target.value;
    if (!isValidAge(age)) {
        var ageError = event.target.nextElementSibling;
        ageError.classList.replace('hideError', 'showError');
    }
}

function isValidPhoneNumber (phoneNumber) {
    var phoneNumberFormat = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    var phoneNumberFormat2 = /(\s)/g;
    if (phoneNumber.length < 7 || phoneNumber.match(phoneNumberFormat) || phoneNumber.match(phoneNumberFormat2)){
        return false;
    }
    return true;
}

function validatePhoneNumber (event) {
    var phoneNumber = event.target.value;
    if (!isValidPhoneNumber(phoneNumber)){
        var phoneNumberError = event.target.nextElementSibling;
        phoneNumberError.classList.replace('hideError', 'showError');
    }
}

function isValidAdress (adress) {
    var adressFormat = /^([a-zA-Z])+\s([0-9])+$/;
    if (adress.length < 5 || !adress.match(adressFormat)) {
    return false;
    }
    return true;
}

function validateAdress (event) {
    var adress = event.target.value;
    if (!isValidAdress(adress)) {
        var adressError = event.target.nextElementSibling;
        adressError.classList.replace('hideError', 'showError');
    }
}

function isValidCity (city) {
    if (city.length < 3) {
        return false;
    }
    return true;
}

function validateCity (event) {
    var city = event.target.value;
    if (!isValidCity(city)) {
        var cityError = event.target.nextElementSibling;
        cityError.classList.replace('hideError', 'showError');
    }
}

function isValidPostcode(postcode) {
    var postcodeFormat = /^[0-9]/;
    if (postcode.length <3 || !postcode.match(postcodeFormat)) {
        return false;
    }
    return true;
}

function validatePostcode (event) {
    var postcode = event.target.value;
    if (!isValidPostcode(postcode)) {
        var postcodeError = event.target.nextElementSibling;
        postcodeError.classList.replace('hideError', 'showError');
    }
}

function isValidDni (dni) {
    var dniFormat = /^[0-9]/;
    if (dni.length < 7 || dni.length > 8 || !dni.match(dniFormat)) {
        return false;
    }
    return true;
}

function validateDni (event) {
    var dni = event.target.value;
    if (!isValidDni(dni)) {
        var dniError = event.target.nextElementSibling;
        dniError.classList.replace('hideError', 'showError');
    }
}

function getInputValues() {
    var inputs = ['fullName', 'email', 'password', 'repitePassword', 'age', 'phoneNumber', 'adress', 'city', 'postcode', 'dni'];
    return inputs.map(function (i){
        return document.getElementById(i).value;
    });
}

function getErrors() {
    var errors = [];
    var correctFullName = isValidFullName(document.getElementById('fullName').value);
    if (!correctFullName) errors.push('fullNameError');
    var correctEmail = isValidEmail(document.getElementById('email').value);
    if (!correctEmail) errors.push('emailError');
    var correctPassword = isValidPassword(document.getElementById('password').value);
    if (!correctPassword) errors.push('passwordError');
    var correctComparePassword = isValidComparePassword(document.getElementById('repitePassword').value);
    if (!correctComparePassword) errors.push ('passwordCompareError');
    var correctAge = isValidAge(document.getElementById('age').value);
    if (!correctAge) errors.push ('ageError');
    var correctPhoneNumber = isValidPhoneNumber(document.getElementById('phoneNumber').value);
    if (!correctPhoneNumber) errors.push ('phoneNumberError');
    var correctAdress = isValidAdress(document.getElementById('adress').value);
    if (!correctAdress) errors.push ('adressError');
    var correctCity = isValidCity(document.getElementById('city').value);
    if (!correctCity) errors.push ('cityError');
    var correctPostcode = isValidPostcode(document.getElementById('postcode').value);
    if (!correctPostcode) errors.push ('postcodeError');
    var correctDni = isValidDni(document.getElementById('dni').value);
    if (!correctDni) errors.push ('dniError');
    return errors;
}

function buttonClicked (event) {
    var errors = getErrors();
    if (errors.length > 0){
        alert(errors.join('\r\n'));
    } else {
        var inputValues = getInputValues();
        alert(inputValues.join('\r\n'));
    }
}

function hideError(event) {
    var error = event.target.nextElementSibling;
    error.classList.replace('showError', 'hideError');
}

window.onload = function () {
    var name = document.getElementById('fullName');
    name.onblur = validateFullName;
    name.onfocus = hideError;

    var email = document.getElementById('email');
    email.onblur = validateEmail;
    email.onfocus = hideError;

    var password = document.getElementById('password');
    password.onblur = validatePassword;
    password.onfocus = hideError;

    var repitePassword = document.getElementById('repitePassword');
    repitePassword.onblur = comparePassword;
    repitePassword.onfocus = hideError;

    var age = document.getElementById('age');
    age.onblur = validateAge;
    age.onfocus = hideError;

    var phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.onblur = validatePhoneNumber;
    phoneNumber.onfocus = hideError;

    var adress = document.getElementById('adress');
    adress.onblur = validateAdress;
    adress.onfocus = hideError;

    var city = document.getElementById('city');
    city.onblur = validateCity;
    city.onfocus = hideError;

    var postcode = document.getElementById('postcode');
    postcode.onblur = validatePostcode;
    postcode.onfocus = hideError;

    var dni = document.getElementById('dni');
    dni.onblur = validateDni;
    dni.onfocus = hideError;

    var button = document.getElementById('button');
    button.onclick = buttonClicked;
}