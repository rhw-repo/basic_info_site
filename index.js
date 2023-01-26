require('dotenv').config()

const express = require('express');

//instance of an express app
const app = express();


// listen for requests
app.listen(process.env.PORT);
//app.listen(8080)

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', {root: __dirname});
});


app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', {root: __dirname});
});

app.get('/contact-me', (req, res) => {
    res.sendFile('./pages/contact-me.html', {root: __dirname});
});

// redirects 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.sendFile('./pages/404.html', {root: __dirname});
})

