const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const profileRouter = require('../routerHandler/profileRouter.js');

router.get('/', async(req,res) => {
    res.render('dashboard.ejs');
});
router.use('/profile', profileRouter);
router.get('/logout', async(req,res) => {
      req.logOut();
      req.flash();
      res.redirect('/signin');
});
module.exports = router;