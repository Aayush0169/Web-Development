//requiring modules
const express=require('express');
const methodOverride = require('method-override');
const app=express();
const mongoose= require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


//setting path for views
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")

//setting mongodb sever
main()
.then(()=>{console.log("Connected to db:")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatsDB');
}

//starting connection
app.listen(8080,(port)=>{
    console.log("App started on port: 8080")
})

//index rout
app.get("/chats",async (req,res)=>{
  let chats=await Chat.find()
  res.render("index.ejs",{chats});
})

app.get("/",(req,res)=>{
    res.send("HEllo")
})

//new route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs")
})

//create/post route
app.post("/chats",(req,res)=>{
  let{from,to,message}=req.body;
  let newChat=new Chat({
    from:from,
    to:to,
    message:message,
    time:new Date()
  });
  newChat.save().then(res=>{
    console.log("Message Saved!")
  })
  .catch(err=>{
    console.log(err);
  })
  console.log(newChat);
  res.redirect("/chats");
})

//edit route
app.get("/chats/:id/edit",async (req,res)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async (req,res)=>{
  let {message:newMsg}=req.body;
  let upChat= await Chat.findByIdAndUpdate(id,{message:newMsg},{runValidators:true});
  res.redirect("/chats");
})


//delete route
app.delete("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  await Chat.findByIdAndDelete(id);
  alert("Chat delted!");
  res.redirect("/chats");

})