const express = require('express');
const router=express.Router();
const passport = require('passport');
const wrapAsync = require('../utils/wrapAsync');
const {saveRedirctUrl}= require("../middlewares");

const userController=require("../controllers/user.js");


// for signup
router.route("/signup")
.get(userController.signUp)
.post(wrapAsync (userController.postSignUp))
 ;

//for log-in
router.route("/login")
.get(userController.logIn)
.post(
     saveRedirctUrl,
    passport.authenticate("local",
        {failureRedirect: "/login", 
        failureFlash:true}) ,
    userController.postLogIn
)


//log-out request
router.get("/logout",
    userController.logOut
)
module.exports=router;