const express = require('express');
const ejs = require('ejs');
const app = express();
const Post = require('./models/Post');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');
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
app.use(methodOverride('_method',{
    methods:['POST','GET']
}));


app.get('/',postController.getAllPosts);
app.get('/post/:id',postController.getPost);
app.post('/add_post',postController.createPost);
app.delete('/post/:id',postController.deletePost);
app.put('/post/:id',postController.editPost);



app.get('/about',pageController.getAboutPage);
app.get('/add_post',pageController.getAddPost);
app.get('/post/edit/:id',pageController.getEditPost);



app.listen(port,()=>{
    console.log(`Sunucu ${port} Portunda Başladı...`);
});