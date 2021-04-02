const express = require('express');
const app = express();
const signUpRouter = require('./routerHandler/signupRouter');
const mongoose = require('mongoose');


app.use(express.static(__dirname+'/HtmlFile'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/signup', signUpRouter);

mongoose.connect('mongodb://localhost/data',{useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
  console.log("Connection successful");
}).catch((err) => {
  console.log("error");
});
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/HtmlFile/home.html');
});

app.post('/',(req,res) => {
    console.log('hit from index');
});
app.listen(4000,() => {
    console.log('listening on port 4000');
});