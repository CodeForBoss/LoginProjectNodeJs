const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
    },
    tokens : [{
        token:{
            type: String,
            required: true,
        }
    }]
});
//generates tokens
signUpForm.methods.generateAuthToken = async function() {
    try{
       const token = jwt.sign({_id:this._id.toString()}, 'mynameisanisurrahmanapeldaffodilinternationalunicersity');
       this.tokens = this.tokens.concat({token: token});
       await this.save();
       return token; 
    }catch (error){
        res.send("this is error part " + error);
    }
}
// Password Encyptions
/*signUpForm.pre("save", async function(next) {
       if(this.isModified("Password")){
              this.Password = await bcrypt.hash(this.Password, 10);
       }
     next();  
});*/
const User =   mongoose.model("DATA", signUpForm);
module.exports = User;
