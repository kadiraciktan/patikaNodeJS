const express = require('express');
const ejs = require('ejs');
const app = express();
const Post = require('./models/Post');
const mongoose = require('mongoose');
const port=80;


//DATABASE CONNECTION 
mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set("view engine","ejs");


//MIDDLEWARES 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true})); // bodyparser yerine kullanılıyor -> urldeki datayı okuyor
app.use(express.json()); //urldeki datayı json a çeviriyor


app.get('/',async(req,res)=>{
    var posts = await Post.find({});
    res.render("index",{
        posts
    });
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/add_post',(req,res)=>{
    res.render("add_post");
});

app.post('/add_post',async (req,res)=>{
    await Post.create(req.body);
    res.redirect('/');
});

app.listen(port,()=>{
    console.log(`Sunucu ${port} Portunda Başladı...`);
});