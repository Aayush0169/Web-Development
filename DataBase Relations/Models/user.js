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
  addresses:[
    {
      _id:false,
      location:String,
      city:String
    }
  ]
});
const User=mongoose.model("user",userSchema);
const addUSer= async()=>{
  let user1=new User({
    name:"Ayush",
    addresses:[
      {
        location:"abc",
        city:"nyc"
      },
      {
        location:"xyz",
        city:"nyc"
      }
    ]
  })
  user1.addresses.push({location:"asdf",city:"nyc"});
  //  let result=await user1.save();
   console.log(result);
}
addUSer();