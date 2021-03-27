const express = require('express');
const app = express();

app.use(express.static('HtmlFile'));

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/HtmlFile/home.html");
});
app.get('/signup',(req,res) => {
    
});
app.listen(4000,() => {
    console.log('listening on port 4000');
});