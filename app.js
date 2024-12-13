const dotenv=require("dotenv");
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=new express();
const ConnectToDB=require("./db/db");
const UserRouter = require("./user.routes");

ConnectToDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",UserRouter);

module.exports=app;