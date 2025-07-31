const mongoose=require("mongoose");
const Listing=require("../Models/listing.js");
const data = require("./data.js");


const dbURL="mongodb://127.0.0.1:27017/WanderersDB";
async function main() {
    await mongoose.connect(dbURL);
} 

main().then(()=>{
    console.log("COnnected to DB");
}).catch((err)=>{
    console.log(err);
});

const initDB = async ()=>{
        await Listing.deleteMany({});
        data.data=data.data.map((obj)=>({...obj, owner:"68120d5c0c832158ad9a3341"}))
        try {
            await Listing.insertMany(data.data);
            console.log("Listings inserted successfully.");
        } catch (error) {
            console.error("Error inserting listings:", error);
        }
}
initDB();