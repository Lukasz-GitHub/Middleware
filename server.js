var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});
// Middleware dla /store
app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.use(function (req, res, next) {
    res.status(404).send('Nie odnaleziono żądania')
})
// Server
app.listen(3000);
