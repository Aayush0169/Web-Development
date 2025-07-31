const Listing= require('./Models/listing');
const customError=require("./utils/customError");
const {listingSchema}=require("./validateSchema");
const Review=require("./Models/review");
const reviewSchema=require("./validateSchema");


//for checking if the user is logged in
module.exports.isLoggedin=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","Please log-in or sign-up first")
        return res.redirect("/login");
    }
    next();
}

//redirets the url from where log-in req was sent
module.exports.saveRedirctUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next()
}

//autherizing if the review/listing belongs to the current user
module.exports.isOwner= async (req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
    req.flash("error","You don't own this listing");
    return res.redirect(`/listings/${id}`);
    }
    next();
}

//authorizing if the review belongs to current user
module.exports.isAuthor= async (req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
    req.flash("error","You didn't write this review");
    return res.redirect(`/listings/${id}`);
    }
    next();
}

//for validating listings
module.exports.validateListing=(req,res,next)=>{
        let {error}=listingSchema.validate(req.body);
        if(error){
            let errMsg=error.details.map((el)=>el.message).join(",");
            throw new customError(400,errMsg);
        }
        else{
            next();
        }
    }

module.exports.validateReview=(req,res,next)=>{
let {error}=reviewSchema.validate(req.body);
 if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
         throw new customError(400,errMsg); 
        }
        else{
            next();
            
        }
    }