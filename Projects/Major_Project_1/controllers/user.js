const User=require('../Models/user');
const passport = require('passport');

//user signup
module.exports.signUp=(req, res) => {
    console.log("Signup route hit");
    req.flash("success","Welcome Sign-up Successfull!")
    res.render("users/signup.ejs");
}

//post signUp
module.exports.postSignUp=async (req, res) => {
try{
    let { username, email, password } = req.body;
    let newUser = new User({ username, email });

    // Register the user with the provided password
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","signed in succesfully!");
        res.redirect("/listings");
    })
}catch(e){
    console.log(e);
    req.flash("error", e.message);
    res.redirect("/signup");
}
}

//login
module.exports.logIn= (req, res) => {
    console.log("login route hit");
    res.render("users/login.ejs");
}

//post logIn
module.exports.postLogIn=
    async(req,res)=>{
        req.flash("success","Logged in succesfully!");
        let redirectUrl=res.locals.redirectUrl||"/listings";
        res.redirect(redirectUrl);
    }

//logout
module.exports.logOut=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           return next(err); 
        }
        req.flash("success","Logged-Out Successfully!");
        res.redirect("/listings");
    })
}