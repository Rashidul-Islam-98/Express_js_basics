const express=require("express");
const { getUser, saveUser } = require("../controllers/user.controllers");
const route=express.Router();

route.get("/user",getUser);
route.post("/user",saveUser);
module.exports=route;