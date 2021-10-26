js/app.js

const fNameEl = document.querySelector('#fName');
const LNameEl = document.querySelector('#LName');
const emailEl = document.querySelector('#email');

const form = document.querySelector('#signup');
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});
const isRequired = value => value === '' ? false : true;
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const formField = input.parentElement;
formField.classList.remove('success');
formField.classList.add('error');
const error = formField.querySelector('small');
error.textContent = message;
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';

}const checkUsername = () => {

    let valid = false;


    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isfNameValid = checkfName(),
        islNameValid = checklName(),
        isEmailValid = checkEmail(),
        
       

    let isformValid = isfNameValid &&
        islNameValid &&
        isEmailValid;
        
        

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});