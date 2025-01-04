const express=require("express");
const app=express();
const path= require("path");
const port=8080;

//confirmation of server
app.listen(port,()=>{
    console.log(`server is listening on: ${port}`);
})

// setting views and static folder
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"Public/style")));
app.use(express.static(path.join(__dirname,"Public/js")));


//for home
app.get('/',(req,res)=>{
         res.render("home.ejs");
})

//with params
app.get('/:username',(req,res)=>{
    let{username}=req.params;
    const instdata=require("./data.json");
    const data= instdata[username];
    console.log(data);
    res.render("main.ejs",{data});
})




//for invalid input
app.get('*',(req,res)=>{
    console.log(req);
    res.send("<h1>invalid URL</h1>");
})