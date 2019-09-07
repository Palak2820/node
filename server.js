const http = require('http');

const express= require('express');

const app =express();

app.use((req,res,next) =>{
    console.log('in the middleware');

    next();//this allow to continue the request to next
});
app.use('/add-product',(req,res,next) =>{
    console.log('in the another middleware');
    res.send('<h1> The add product page</h1>');

    next();
});

app.use('/',(req,res,next) =>{
    console.log('in the another middleware');
    res.send('<h1> hello from express</h1>');
});

app.listen(3000);

