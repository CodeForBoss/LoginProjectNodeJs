const mongoose = require('mongoose');
const express = require('express');
const formSchema = require('../Schemas/formSchema');
const signupClass = new mongoose.model("SIGNUP", formSchema);

const router = express.Router();

router.get('/', async(req,res) => {
      
});

router.post('#signup/submit', async (req,res) => {
      
});

router.put('/:id', async(req,res) => {
      
});

router.delete('/:id', async(req,res) => {
      
});

module.exports = router;