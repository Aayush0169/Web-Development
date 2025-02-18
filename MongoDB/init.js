const mongoose=require("mongoose");
//setting mongodb sever
main()
.then(()=>{console.log("Connected to db:")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatsDB');
}

let allChats=[{
    from:"Virat",
    to:"Rohit",
    message:"Bat or Ball",
    time: new Date()
  },
  {
    from:"Anushka",
    to:"Virat",
    message:"Chauka Maar",
    time: new Date()
  },
  {
    from:"Groot",
    to:"Steve",
    message:"I Am Groot!",
    time: new Date()
  },
  {
    from:"Tony",
    to:"Morgan",
    message:"I Love You 3000!",
    time: new Date()
  },
  {
    from:"SpiderMan",
    to:"Nova",
    message:"Ulti Balti",
    time: new Date()
  },
  {
    from:"Deadpool",
    to:"Batman",
    message:"I am Batman",
    time: new Date()
  },
  {
    from:"Tony",
    to:"Thanos",
    message:"I am IronMan!",
    time: new Date()
  }];

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
  Chat.insertMany(allChats);