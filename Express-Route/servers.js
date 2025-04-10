const express=require("express");
const app=express();
const users=require("./routes/user.js")
const posts=require("./routes/post.js")

app.listen(3500,()=>{
    console.log("Started listening! ");
})
//middleware
app.use("/user", users);
app.use("/post", posts);

//index route
app.get("/",(req,res)=>{
    res.send("hii");
})

