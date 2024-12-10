const dotenv=require("dotenv");
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=new express();

app.use(cors());

module.exports=app;