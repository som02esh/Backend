import express, { Router } from "express"
const userRouter=express.Router();
import {apple} from "../controller/usercontroller.js";


userRouter.post("/apple",apple)




export {userRouter}

// module.exports={router}



