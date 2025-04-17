//router file for user route
const express=require("express");
const router=express.Router();


//user route
//index
router.get("/",(req,res)=>{
    res.send("Get user request");
})

//user show
router.get("/:id",(req,res)=>{
    res.send("Hii , ssup");
})
//update user
router.put("/:id",(req,res)=>{
    res.send("updated");
})

module.exports=router;