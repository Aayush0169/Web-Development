const mongoose= require("mongoose");
const {Schema}=mongoose;

//setting mongodb sever
main()
.then(()=>{console.log("Connected to db:")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relations');
}

const userSchema=new Schema({
    name:String,
    email:String
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{ 
         type: Schema.Types.ObjectId,
         ref:"User"
    }
});
//creating models
const user=mongoose.model("User",userSchema);
const post=mongoose.model("Post",postSchema);

// const addData= async()=>{
//     let user1=new user({
//         name:"Virat",
//         email:"virat@18.com"
//     });
//     let post1=new post({
//         content:"hii",
//         likes:52
//     })
//     post1.user=user1;

//     let result1=await user1.save();
//     let result2=await post1.save();
//     console.log(result1);
//     console.log(" ");
//     console.log(result2);
// }
// addData();

const addData= async()=>{
    let user1= await user.findOne({name:"Virat"});
    let post1=new post({
        content:"byeeeeeeeeee",
        likes:69
    });
    post1.user=user1;
    // let result2=await post1.save();

    console.log(result2);
}

//functions
const getData=async ()=>{   //finding data
    let res= await post.findOne({}).populate("user");
    console.log(res);
}
getData()