import express from "express"
const menuRouter=express.Router();
import { addItem, addMenu, fetchMenuItem } from "../controller/menuController.js";

menuRouter.post("/addItem",addItem)
menuRouter.post("/addMenu",addMenu)
menuRouter.post("/fetchMenuItem",fetchMenuItem)




export {menuRouter}