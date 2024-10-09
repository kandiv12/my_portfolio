const express=require('express');
const app=express();

app.set('view engine','ejs');

const path=require('path');

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



//define a route for the homepage

app.get('/',(req,res)=>{
    res.render('index');
});

const port=3000;

app.listen(port,()=>{
    console.log('running server on port 3000');
});

