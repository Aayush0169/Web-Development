//requiring
const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../Models/listing.js");
const Review = require("../Models/review.js");
const customError=require("../utils/customError");
const {reviewSchema, listingSchema }=require("../validateSchema.js");
const { isLoggedin, isOwner, validateListing, validateReview , isAuthor} = require("../middlewares.js");
const flash=require("connect-flash");
const multer  = require('multer')
const{storage}=require("../cloudConfig.js");
const upload = multer({storage })

const listingController=require("../controllers/listing.js");


//listing routes
 //index & create route
 router.route("/")
 .get(wrapAsync(listingController.index))
 .post(
        upload.single('listing[image]'), 
        isLoggedin,                      
        validateListing,                
        wrapAsync(listingController.create)
    )

 //new route
 router.get("/new",
    isLoggedin,
    listingController.newForm)

 //show, update, & delete route
 router.route("/:id")
 .get(wrapAsync(listingController.show))
 .put(
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.update)
 )
.delete(
    isLoggedin,
    isOwner,
    wrapAsync(listingController.delete)
 )

 //edit route
 router.get(
     "/:id/edit",
     isLoggedin,
     isOwner,
    wrapAsync(listingController.edit)
 )

//review routes
 //post-review
 router.post(
    "/:id/review",
    isLoggedin,
    wrapAsync(listingController.postReview)
 ) 

 //delete review route
 router.delete(
    "/:id/review/:reviewId",
    isLoggedin,
    isAuthor,
    wrapAsync(listingController.deleteReview)
 )
module.exports=router
