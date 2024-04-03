const mongoose= require("mongoose");
const dbconnect =async()=>{
    mongoose.connect('mongodb://localhost:27017/Donation').then(()=>{
        console.log("connected to database");
    }).catch(()=>{
        console.log("unsuccessful connection");
    })
}

module.exports=dbconnect;