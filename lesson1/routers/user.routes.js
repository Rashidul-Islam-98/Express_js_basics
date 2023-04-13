const express=require('express');
const router=express.Router();

router.get("/register",(req,res)=>{
    res.send("Reuest from register");
});
router.get("/admin",(req,res)=>{
    res.send("Reuest from admin");
});
router.get("/login",(req,res)=>{
    res.send("Reuest from login");
});

module.exports=router;