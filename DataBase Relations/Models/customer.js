const mongoose= require("mongoose");
const {Schema}=mongoose;

//setting mongodb sever
main()
.then(()=>{console.log("Connected to db:")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Relations');
}

const orderSchema=new Schema({
    item:String,
    price:Number
});

const Order=mongoose.model("Order",orderSchema);

const customerSchema=new Schema({
    name:String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

const Customer=mongoose.model("Customer",customerSchema);

//defining middleware
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders && customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log("Deleted Orders:", res);
    }
});



//functions
const findCustomer= async ()=>{//for finding
   let res= await Customer.findOne({name:"Rohit"}).populate("orders","item");//replaces the ObjectId in the document with the actual referenced document
   console.log(res);
   
}
// findCustomer();

const addCustom= async ()=>{//for adding
    let customer=new Customer({
        name:"Rohit"
    })
    let order1= new Order({
        item:"pizza",
        price:"270"
    })
    await order1.save();
    customer.orders.push(order1);
    let res=await customer.save();
    console.log(res);
}
// addCustom()

//for deletion
const del = async () => {
    try {
        let result = await Customer.findOneAndDelete({ _id: "67efb14691efa640c1c10a42" });
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};

del();
