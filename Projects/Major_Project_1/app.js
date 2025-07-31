//accessing env
if(process.env.Node_ENV!="production"){
    require('dotenv').config()
}
console.log(process.env.SECRET)
//requiring
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path")
const methodOverride=require("method-override")
const ejsMate= require("ejs-mate");
//session & cookies 
const session=require("express-session");
const cookie=require("cookies");
//flash
const flash=require("connect-flash");
//authentication
const passport=require('passport');
const LocalStratgey=require('passport-local'); 
const User=require('./Models/user.js');


//custom reuires
const customError=require("./utils/customError");
const wrapAsync=require("./utils/wrapAsync");
const {reviewSchema }=require("./validateSchema");
const Review=require("./Models/review");
const Listing=require("./Models/listing");


const listingRouter = require('./routes/listings'); 
// const reviewRouter = require('./routes/reviews'); 
const userRouter = require('./routes/users.js'); 
// const { date } = require("joi");

//uses
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "/public")))

//using sessions and flash
const sessionOptions = {
    secret: "secretString",
    resave: false,
    saveUninitialized: true
  };

  //session middleware
app.use(session(sessionOptions));
app.use(flash());
//default route
app.get("/",(req,res)=>{
    res.redirect("/listings");
})
app.get("/home",(req,res)=>{
    res.redirect("/listings");
})
app.get("/listing",(req,res)=>{
    res.redirect("/listings");
})


//passport middleware
app.use(passport.initialize()); //initializing passport
app.use(passport.session()); //maintaining the session
passport.use(new LocalStratgey(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//using flash 
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next()
})

app.get("/demoUser",async (req,res)=>{
    let fakeUser=new User({
        email:'student@gmail.com',
        username:'demo'
    })
   let newUserr= await User.register(fakeUser,"hibcsd"); 
   res.send(newUserr);
})

//using custom routes
app.use("/listings", listingRouter);
// app.use("",reviewRouter);
app.use("/",userRouter);


//setting path for views
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")


  
//connecting with database
const dbURL="mongodb://127.0.0.1:27017/WanderersDB";
async function main() {
    await mongoose.connect(dbURL);
} 

main().then(()=>{
    console.log("COnnected to DB");
}).catch((err)=>{
    console.log(err);
});

app.listen(8080,()=>{
    console.log("Server Started! ");
})
 

    //error Hanndeling
    app.all("*",(req,res,next)=>{
        next(new customError(404,"page not found"));
    });
    
   app.use((err,req,res,next)=>{
    let{status=500,message="Some error occured"}=err;
    res.status(status).render("error.ejs",{err});
})


