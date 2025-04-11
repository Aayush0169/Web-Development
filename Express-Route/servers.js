const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")

const users=require("./routes/user.js")
const posts=require("./routes/post.js")

app.use(cookieParser("code"));

app.listen(3500,()=>{
    console.log("Started listening! ");
})

//middleware
app.use("/user", users);
app.use("/post", posts);

//index route
app.get("/",(req,res)=>{
    res.send("hii this is for cookies and express route!");
})


app.get("/getcookies",(req,res)=>{
    res.cookie("greet","Hello");
    res.cookie("red","color")
    res.send("Sent you some cookies")
})

app.get("/greet", (req,res)=>{
    let {name="guest"}=req.cookies;
    res.send(`welcome ${name}`)
})

app.get("/signedcookies", (req, res) => {
    res.cookie("Name", "Aayush", { signed: true });
    res.cookie("Pass", "here123@", { signed: true });
    res.send("sent a signed cookie!!");
    console.log("Unsigned Cookies:", req.cookies);
    console.log("Signed Cookies:", req.signedCookies);
  });
  
  app.get("/readSignedCookies", (req, res)=>{
      console.log("Signed cookies in read route", req.signedCookies);
      res.send(`<h3>This is your cookie:</h3> <br> <p>${JSON.stringify(req.signedCookies)}</p>`);
  })