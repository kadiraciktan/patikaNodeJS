let posts = [
    {id:1,desc:"Başlık 1",content:"İçerik 1"},
    {id:2,desc:"Başlık 2",content:"İçerik 2"},
    {id:3,desc:"Başlık 3",content:"İçerik 3"},
    {id:4,desc:"Başlık 4",content:"İçerik 4"}
];

let post = {id:5,desc:"Başlık 33",content:"İçerik 33"}

const postList = ()=>{
    console.log("---------------------");
    posts.map((item)=>{
        console.log(item.desc);
    });
};

const addPost =(newPost,callback)=>{
    posts.push(newPost);
    callback();
}

postList();

addPost(post,postList);
