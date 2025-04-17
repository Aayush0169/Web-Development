//router file for posts route
const express=require("express");
const router=express.Router();

//post route
//index route
router.get("/",(req,res)=>{
    res.send("Post get  received! ");
})
//show post
router.get("/:id",(req,res)=>{
    res.send("get post id  post");
})
//update post
router.put("/:id",(req,res)=>{
    res.send("edit this post");
})

module.exports=router;