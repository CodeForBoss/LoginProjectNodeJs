const mongoose = require('mongoose');
const express = require('express');
const formSchema = require('../Schemas/formSchema');
const signupClass = new mongoose.model("DATA", formSchema);
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', async (req,res) => {
    res.render('signup.ejs');
});

router.post('/', async (req,res) => {
        const phone = req.body.phone;
        const user = await signupClass.findOne({Phone:phone});
         if(user === null) {
            const signupPerson = new signupClass({
                FirstName: req.body.firstName,
                LastName: req.body.lastName,
                Phone: req.body.phone,
                Password: req.body.password
          });
         const signuped = await signupPerson.save();
         res.status(201);
         res.send("sign up successfully");
        } else {
            if(user.Phone === phone){
                res.send("User already Exits!");
            }
        }
});

router.put('/:id', async(req,res) => {
      
});

router.delete('/:id', async(req,res) => {
      
});

module.exports = router;