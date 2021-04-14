const express = require('express');
const mongoose = require('mongoose');
const ModelClass = require('../Schemas/formSchema');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { isMatch } = require('lodash');

const router = express.Router();

router.get('/' ,async(req,res) => {
     res.render('login.ejs');
});

router.post('/', async(req,res,next) =>{
     try{
          const phone = req.body.phone;
          const pass =req.body.password;
          const user = await ModelClass.findOne({Phone: phone});
          var isMatch = true;
          var isMatch = (pass === user.Password)? isMatch: false;
          const token = await user.generateAuthToken();
          res.redirect('/dashboard');

     } catch(err){
            console.log('Invalid Phone or Password');
     }
});

router.put('/', async(req,res) => {

});


router.delete('/', async(req,res) => {
      
});


module.exports = router;