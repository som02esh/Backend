import mongoose from "mongoose";



const menuSchema = new mongoose.Schema({
    name:{
        type:String,
    }
})

const menu=mongoose.model('menu',menuSchema)

export default menu