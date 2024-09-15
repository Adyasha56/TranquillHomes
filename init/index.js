const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js"); 

const MONGO_URL = "mongodb://127.0.0.1:27017/TranquillHomes";

main()
    .then( () =>{
    console.log("connected to db");
    })
    .catch((err) =>{
      console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    //after adding log in functionality 
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner:"669c055fc550ed40cc7f5ed3",
    }));
    
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();