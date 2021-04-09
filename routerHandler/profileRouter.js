const express = require('express');
const router = express.Router();


router.get('/', async(req,res) => {
       res.render('profile.ejs', {
            User : {
               firstname: req.user.FirstName,
               lastname: req. user.LastName,
               phone: req.user.Phone,   
            },
            fullName: req.user.FirstName + ' '+ req.user.LastName,
       });
});

router.put('/', async(req,res) => {
      
});

module.exports = router;