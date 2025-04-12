const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, );

require('./routes/auth');
app.use(session({
    secret: 'your_secret',
    resave: false,
    saveUninitialized: false
  }));
  
app.use(passport.initialize());
app.use(passport.session());
app.use('view enging', ejs);

app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/profile',(req,res)=>{
    if(!req.isAuthenticated()){
        return res.redirect('/');
    }
    res.render('profile',{user:req.user})
});

app.get('/logout', (req,res)=>
{
    req.logOut((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
});

app.listen(3000,()=>console.log("server is running"));