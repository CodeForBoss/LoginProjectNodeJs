const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuthenticated} = require('../Passport/auth.js');

router.get('/', ensureAuthenticated, async(req,res) => {
    res.render('dashboard.ejs');
});
router.get('/logout', async(req,res) => {
      req.logOut();
      req.flash();
      res.redirect('/signin');
});
module.exports = router;