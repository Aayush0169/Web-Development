const express =require("express");
const app=express();
const port=3000;
const path= require("path");

//unique ids
const { v4: uuidv4 } = require('uuid');
uuidv4(); 

//overriding form methods
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

//defining array
let posts=[
    {
        id:uuidv4(),
        user:"ayus",
        content:"Hello everyone",
    },
    {
        id:uuidv4(),
        user:"piyush",
        content:"Nice to meet you!",
    },
    {
        id:uuidv4(),
        user:"khushi",
        content:"what's  up?",
    },
    {
        id:uuidv4(),
        user:"virat",
        content:"offside ball!",
    }

]

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

//starting server
app.listen(port,()=>{
    console.log("app started on port @ "+port);
})

//default page
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

//main page
app.get("/posts",(req,res)=>{
    res.render("index.ejs", { posts });
})

//submit page
app.get("/posts/new",(req,res)=>{
    console.log(req);
    res.render("new.ejs");
})

//posting and updating array
app.post("/posts",(req,res)=>{
    let id =uuidv4();
    let {user,content}=req.body;
    posts.push({id, user,content });
    console.log(req);
    res.redirect("index.ejs",{post});
})

//handeling reqs.
app.get("/posts/:id",(req,res)=>{
    let { id }=req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post} );

})

//patching data
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
})

//edit
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    console.log(post);
    res.render("edit.ejs",{post});
})

//delete
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p) => id !== p.id);
    res.redirect("/posts");
    alert("Deleted Successfully!")
})