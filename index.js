import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
// const mongoose = require('mongoose')
// const express = require('express')
// import { userRouter } from './route/user.js';
import { menuRouter } from './route/menuRouter.js';
const app=express();


const dburl="mongodb://localhost:27017/backendlearning"

app.use(express.json())


app.use(cors({
    // origin:"http://127.0.0.1:5500"
    origin:"*"
}))




app.use("/menu",menuRouter)


const connectdb = async()=>{
    const ans=await mongoose.connect(dburl)
    console.log("connected to db")

}



connectdb();


// app.get("/",(req,res)=>{
// // console.log("i am called ",req.body.name,req.body.remark,req.body.remark2)
// res.json({res:"i am okk"})
// })




app.listen(3000,()=>{
    console.log("listening at port 3000")
})