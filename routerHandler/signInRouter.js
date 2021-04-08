const express = require('express');
const mongoose = require('mongoose');
const ModelClass = require('../Schemas/formSchema');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const router = express.Router();

router.get('/' ,async(req,res) => {
     res.render('login.ejs');
});

router.post('/', async(req,res,next) =>{
     passport.authenticate('local', {
          successRedirect: '/dashboard',
          failureRedirect: '/signin',
          failureFlash: true
     })(req,res, next);
});

router.put('/', async(req,res) => {

});


router.delete('/', async(req,res) => {
      
});


module.exports = router;