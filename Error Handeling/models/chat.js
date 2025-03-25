//connecting with mongoose
const mongoose=require("mongoose");

//defining schema
const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String,
        maxLength:50
    },
    time:{
        type:Date,
        required:true
    }
})

//creating model
const Chat=new mongoose.model("Chat",chatSchema);
module.exports=Chat;