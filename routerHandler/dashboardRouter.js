const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { ensureAuthenticated} = require('../Passport/auth.js');
const profileRouter = require('../routerHandler/profileRouter.js');

router.get('/', ensureAuthenticated, async(req,res) => {
    var firstName = req.user.FirstName;
    var lastname = req.user.LastName;
    var userNm = firstName +' '+ lastname;
    res.render('dashboard.ejs', {
        userName: userNm,
    });
});
router.use('/profile', profileRouter);
router.get('/logout', async(req,res) => {
      req.logOut();
      req.flash();
      res.redirect('/signin');
});
module.exports = router;