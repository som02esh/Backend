import mongoose from "mongoose";


const item=new mongoose.Schema({
    menu:{
        type:mongoose.Schema.ObjectId,
        ref:'menu'
    },
    name:{
        type:String,
        required:true
    },
    barCode:{
        type:String,
        required:true
    }


},{timestamps:true})

item.methods.generateotp=()=>{
    const random=Math.floor(Math.random() * 1000);
    return random;
}


item.pre('save', function(next) {

    if (this.name !== "burger") {
      return next(new Error("Name must be 'burger'"));
    }
    next();
  });
  


const menuItem = mongoose.model("menuItem",item)


export default menuItem



