const mongoose=require("mongoose");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");

const User=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLegth:[3,"Firstname Should be atleast of 3 characters long"]
        },
        lastname:{
            type:String,
            minLegth:[3,"lastname Should be atleast of 3 characters long"]
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minLegth:[5,"Email must be of 5 characters"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    soketId:{
        type:String
    }
},{
    timestamps:true
});


User.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},"123456789-1234567");
    return token;
}

User.methods.ComparePassword=async function(password)
{
    return await bcrypt.compare(password,this.password);
}

User.statics.hashpassword=async function(password) {
    return await bcrypt.hash(password,10);
}

const UserModel=mongoose.model("user",User)
module.exports=UserModel;