import menuItem from "../models/menuItem.js"
import menu from "../models/menu.js"

export const addItem=(req,res)=>{

   const item= new menuItem()

   item.menu="677762a084e9b6e78cd016d0"
   item.name="burger"
   item.barCode="1001"

   const otp=item.generateotp()
   console.log(otp)


   item.save().then(()=>{
    console.log("data added");
    res.send("i am added")
   })


}


export const addMenu=(req,res)=>{

   menu.create({name:"chinese"}).then(()=>{
     console.log("menu added")
      res.send("added new menu")
   })

}



export const fetchMenuItem= async (req,res)=>{
   const query={
      name:"burger"
   }
   const getmenu=await menuItem.find(query).populate('menu');
   res.json(getmenu);
}