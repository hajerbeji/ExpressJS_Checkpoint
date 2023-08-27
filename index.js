const express=require('express');
const {  timeMiddleware } = require('./woking');
const app=express();
const port=5000;

app.set('view engine','pug');
app.set('views','./views');

app.use(timeMiddleware)


app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/services',(req,res)=>{
    res.render('services')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(port)