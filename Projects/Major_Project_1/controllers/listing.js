const Listing = require("../Models/listing.js");
const Review = require("../Models/review.js");

//index route
module.exports.index=async(req,res)=>{
        const allListings=await Listing.find({});
        res.render("listings/index.ejs",{allListings});
    }
//new Form
module.exports.newForm=(req,res)=>{
    res.render("listings/new.ejs");
 }    
//show listing
module.exports.show=async(req,res)=>{
        let {id}=req.params;
        const listing=await Listing.findById(id)
        .populate({
            path:"reviews",
            populate:{
                path:"author",
            }
        })
        .populate("owner");
        if(!listing){
            req.flash("error","Listing not found")
            res.redirect("/listings")
        }
        res.render("listings/show.ejs",{listing});
    }
//create 
module.exports.create=async(req,res,next)=>{
        let url=req.file.path;
        let filename=req.file.filename;
        console.log(url+ ' '+filename);
        const newListing=new Listing(req.body.listing);
        newListing.owner=req.user._id;
        newListing.image={url,filename};
        await newListing.save();
        req.flash("success","New listing created successfully!")
        res.redirect(`/listings/${newListing._id}`);
    }    
//edit
module.exports.edit=async(req,res)=>{
        let {id}=req.params;
        const listing=await Listing.findById(id);
        let originalImg=listing.image.url;
        originalImg=originalImg.replace("/upload","/upload/w_250")
        res.render("listings/edit.ejs",{listing,originalImg})
    }
//update
module.exports.update=async(req,res)=>{
        let {id}=req.params;
        let listing=await Listing.findByIdAndUpdate(id, {...req.body.listing});

        if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        }
        await listing.save();
        req.flash("success","Listing updated successfully!")
        res.redirect(`/listings/${id}`);
    }
//delete
module.exports.delete=async(req,res)=>{
        let{id}=req.params;
        let deletedListing= await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        req.flash("error","Listing delated successfully!")
        res.redirect("/listings")
    }
//review post
module.exports.postReview=async(req,res)=>{
        let listing= await Listing.findById(req.params.id);
        let newReview=new Review(req.body.review);
        newReview.author=req.user._id;
        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();
        req.flash("success","Review added")
        res.redirect(`/listings/${listing._id}`);
    }
//review delete
module.exports.deleteReview=async(req,res)=>{
        let {id, reviewId}=req.params;

        await Listing.findByIdAndUpdate(id, {$pull:{reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("error","review deleted")

        res.redirect(`/listings/${id}`);

    }