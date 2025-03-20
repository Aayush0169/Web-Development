const express=require('express');
const app=express();
const errors=require("./errors");

app.listen("3500")
app.get("/",(req,res)=>{
    res.send("working: ")
})

//basic middleware defination
const check=("/qry",(req,res,next)=>{
    let{pass}=req.query;
    if(pass==="hi"){
        next()
    }
throw new errors(406,"bad-i");
});

app.get("/qry", check ,(req,res)=>{//passing middleware with api/route
    res.send("Granted")
})
app.get("/err",(req,res)=>{
    // res.send("error")
    rxya=abcd;
})

app.get("/admin",(req,res)=>{
    throw new errors(520,"no badmashi")
})

app.use((err,req,res,next)=>{//default error handeler
    console.log("error occurredd");
    // let {status,message}=err;
    let {status=401,message="stupid,stupid,stupid"}=err;
    res.status(status).send(message);
    next();
})