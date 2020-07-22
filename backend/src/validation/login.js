const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateLogin = (data) => {
    let errors = {};

    //Convert empty fields to empty strings
    data.email = !isEmpty(data.email) ? data.password : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Email Check
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password Check
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}