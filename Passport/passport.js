const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = require('../Schemas/formSchema.js');


module.exports = function(passport) {
    passport.use( new LocalStrategy( {
        usernameField: 'phone'
    }, (phone,password,done) => {
        User.findOne({ Phone: phone}).then(user => {
           if(!user) {
               return done(null, false, {message: 'Phone number is not register!'});
           }
           if(password === user.Password){
               return done(null, user);
           } else {
            return done(null, false, {message: 'Password Incorrect!'});
           }
        }).catch((err) => {
            console.log(err);
        })
    })
  );

    passport.serializeUser((user, done) => {
          done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}