const mongoose=require("mongoose");

function ConnectToDB()
{
    mongoose.connect("mongodb://127.0.0.1:27017/uber").then((db)=>{
        console.log("Connected")
    }).catch((err)=>console.log(err));
}

module.exports=ConnectToDB;