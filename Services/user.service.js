const User=require("../model/user.model");

const createUser=async ({firstname,lastname,password,email})=>{
    if(!firstname || !password || !email)
    {
        throw new Error("All fields are required");
    }
    const user=User.create({
        fullname:{
            firstname,
            lastname
        },
        password:password,
        email:email
    });
    return user;
}
module.exports= createUser;