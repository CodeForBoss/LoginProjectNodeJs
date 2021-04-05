const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const signUpForm = new mongoose.Schema({
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
/*signUpForm.pre("save", async function(next) {
       if(this.isModified("Password")){
              this.Password = await bcrypt.hash(this.Password, 10);
       }
     next();  
});*/
const User =   mongoose.model("DATA", signUpForm);
module.exports = User;
