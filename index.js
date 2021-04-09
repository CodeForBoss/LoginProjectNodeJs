const express = require('express');
const app = express();
const signUpRouter = require('./routerHandler/signupRouter');
const mongoose = require('mongoose');
const signInRouter = require('./routerHandler/signInRouter');
const flash = require('connect-flash');
const passport = require('passport');
require('./Passport/passport.js')(passport);
const dashboardRouter = require('./routerHandler/dashboardRouter.js');


const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});


app.use(express.static(__dirname + '/CssFile'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/signup', signUpRouter);
app.use('/signin', signInRouter);
app.use('/dashboard', dashboardRouter);


mongoose.connect('mongodb://localhost/data',{useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
  console.log("Connection successful");
}).catch((err) => {
  console.log("error");
});
app.get('/',(req,res) => {
   res.render('home.ejs');
});

app.listen(4000,() => {
    console.log('listening on port 4000');
});