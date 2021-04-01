const mongoose = require('mongoose');

const signUpForm = mongoose.Schema({
     FirstName: {
         type: String,
         required: true,
     },
     LastName: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    }
});

module.exports = signUpForm;