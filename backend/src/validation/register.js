const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegister = (data) => {
    let errors = {};

    //Convert empty fields to empty strings
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.password : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    //Name Check
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

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

    //Confirm password check
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    }

    //Password sanity check
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least characters';
    }

    //Password match check
    if (!Validator.isEqual(data.password, data.password2)) {
        errors.password2 = 'Password must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}