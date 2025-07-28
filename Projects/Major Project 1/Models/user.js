const mongoose=require("mongoose");
const Scshema=mongoose.Schema;
const localMongoosePassport=require('passport-local-mongoose');

const userSchema= new Scshema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(localMongoosePassport);
module.exports =mongoose.model("User",userSchema);