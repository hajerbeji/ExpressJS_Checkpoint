const express=require('express');
const app=express();
const port=5000;

app.set('view engine','pug');
app.set('views','./views');

app.use((req,res,next)=>{
    const day=new Date().getDay()
    const hour=new Date().getHours()
    if (day>=1 && day<=5 && hour>=9 && hour<=17) {
        next()
    }
    else{
        res.status(403).send('This web application is available during working hours : Monday to Friday,  from 9 to 17')
    }
})

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