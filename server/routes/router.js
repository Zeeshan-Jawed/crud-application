const express =require("express");
const router=express.Router();
const user=require('../models/User')


router.get("/users",async(req,res)=>{
    try {
        const data = await user.find();
        res.status(201).json(data)
        console.log(data);
    } catch (error) {
        res.status(422).json(error);
    }
})
router.get("/user/:id",async(req,res)=>{
    try {
        const {id} = req.params;
    
        const data = await user.find({_id:id});
        res.status(201).json(data)
    
    } catch (error) {
        res.status(422).json(error);
    }
})
router.post("/user",async(req,res)=>{
   
     const {name,address,occupation,phoneno,cnic} =req.body;
     try{
         const newuser=new user({
             name,address,occupation,phoneno,cnic
         });
         await newuser.save();
         res.status(201).json(newuser)
         
     }catch(error){
        console.log(error)
     }
});
router.put("/user/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await user.findByIdAndUpdate({_id:id},req.body,{
            new:true
        });

        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

router.delete("/user/:id",async(req,res)=>{
    try {
        const {id} = req.params;
      
        const deletuser = await user.findByIdAndDelete({_id:id})
        
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports =router;