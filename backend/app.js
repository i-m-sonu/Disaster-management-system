const express = require("express");
const mongoose= require("mongoose");
const bodyparser=require('body-parser');
const cors=require('cors');
const dbconnect = require("./dbconnect");
dbconnect();
const app= express();

app.use(bodyparser.json());
app.use(cors());

const donateschema = new mongoose.Schema({
    name:String,
    commodity:String,
    address:String
});
const Donate=mongoose.model("donate", donateschema);

app.post('/Donate',async(req,res)=>{
    try{
        const {name,commodity,address} = req.body;

        console.log(req.body);
        const donation=new Donate({
            name,
            commodity,
            address,
        });
        await donation.save();
        res.status(201).json({message:"connection successful"});
    }catch(e){
        res.status(400).json({message:"connection unsuccessful"});

    }
});
app.get("/Donate",async(req,res)=>{
    try{
        const items = await Donate.find();
        res.json(items);
    }catch(error){
        console.log("error",error);
    }
});

app.listen(8000,()=>{
    console.log("server running on port 8000");
})
