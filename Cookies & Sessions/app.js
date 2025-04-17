const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")//requiring cookie parser for parsing cookies
const session=require('express-session');// for setting up session
const flash=require("connect-flash");  //for flashing messages
const path=require("path");

//including routes from routes folder
const users=require("./routes/user.js")
const posts=require("./routes/post.js")

//setting path for views
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")


app.use(cookieParser("code"));//using cookie parser


app.listen(3500,()=>{
    console.log("Started listening! ");
})

//middleware for routes
app.use("/post", posts);
app.use("/user", users);

//using *sessions*, now session will be created whenever server will start getting requests
const sessionOptions={secret:"secretString",
    resave:false,
    saveUninitialized:true
};
app.use(session(sessionOptions));
app.use(flash());

//index route
app.get("/",(req,res)=>{
    res.send("hii this is for cookies and express route!");
})

//adding cookies
app.get("/getcookies",(req,res)=>{
    res.cookie("greet","Hello");
    res.cookie("red","color")
    res.send("Sent you some cookies")
})
//sending cookies response
app.get("/greet", (req,res)=>{
    let {name="guest"}=req.cookies;
    res.send(`welcome ${name}`)
})
//sending signed cookies
app.get("/signedcookies", (req, res) => {
    res.cookie("Name", "Aayush", { signed: true });
    res.cookie("Pass", "here123@", { signed: true });
    res.send("sent a signed cookie!!");
    console.log("Unsigned Cookies:", req.cookies);
    console.log("Signed Cookies:", req.signedCookies);
  });
  //reading signed cookies
  app.get("/readSignedCookies", (req, res)=>{
      console.log("Signed cookies in read route", req.signedCookies);
      res.send(`<h3>This is your cookie:</h3> <br> <p>${JSON.stringify(req.signedCookies)}</p>`);
  })

  //for sessions
  app.get("/sessiontest",(req,res)=>{
    res.send("session tested");
  })
  //session's request counter
//   app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1; 
//     }
//     res.send(`You have sent requests ${req.session.count} times!`);
// });

app.get("/register",(req,res)=>{
    let {name="guest"}=req.query;
    req.session.name=name;
    if(name==="guest"||name==null){
        req.flash("registered","Uer Not registered");
    }else{ 
        req.flash("registered","Registration Successfull!");
    }
    res.redirect("/hello");
    
})

app.get("/hello",(req,res)=>{
    res.locals.msg=req.flash("registered");
    res.render("view.ejs",{name:req.session.name});
})
