//requiring modules
const express=require('express');
const methodOverride = require('method-override');
const app=express();
const mongoose= require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");
const errors=require("./errors.js");//custom error class
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
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatsDB2');
}

//starting connection
app.listen(8080,(port)=>{
    console.log("App started on port: 8080")
})

//index rout
app.get("/chats", asynWrap(async (req,res)=>{
  let chats=await Chat.find()
  res.render("index.ejs",{chats});
}))

app.get("/",(req,res)=>{
    res.redirect("/chats")
})

//new route
app.get("/chats/new",(req,res)=>{
  // throw new errors(569,"Wrong wrong")
  res.render("new.ejs")
})

function asynWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch(err=>next(err));
  };
}

//create/post route
app.post("/chats", asynWrap(async (req,res,next)=>{
  
    let{from,to,message}=req.body;
  let newChat=new Chat({
    from:from,
    to:to,
    message:message,
    time:new Date()
  });
   awaitnewChat.save();
}
  
))

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

//New-route
app.get("/chats/:id",async (req,res,next)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  if(!chat){
    //in asynchronus functions next method isn't calledd itself , we have to call the next() explicitly snd then pass the error
    next(new errors(404,"chat not found"));
  }
  res.render("edit.ejs",{chat});
})

//name of error
app.use((err,req,res,next)=>{
  console.log(err.name);
  next(err);
})

//error handeler middleware
app.use((err,req,res,next)=>{
  let{status=469,message="bad request"}=err;
  res.status(status).send(message);
})
