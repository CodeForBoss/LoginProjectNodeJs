const express = require('express');
const mongoose = require('mongoose');
const signUpSchema = require('../Schemas/formSchema');
const ModelClass = new mongoose.model("DATA",signUpSchema);
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/' ,async(req,res) => {
     res.render('login.ejs');
});

router.post('/', async(req,res) =>{
     try{

        const phone = req.body.phone;
          const pass = req.body.password;
          const user = await ModelClass.findOne({Phone:phone});
        if(bcrypt.compare(pass,user.Password)){
             res.send("Login Successfully");
        } else {
            res.send("Invalid login! please try again");
        }

     } catch(error){
         res.send('Invalid login! please try again')
     }
});

router.put('/', async(req,res) => {

});


router.delete('/', async(req,res) => {
      
});


module.exports = router;