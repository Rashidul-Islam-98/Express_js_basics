require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app=express();
const bcrypt=require("bcrypt");
const user=require("./models/user.model");
const User = require("./models/user.model");
const jwt=require("jsonwebtoken");
const passport=require("passport");
require("./config/database");
const saltRound=10;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(passport.initialize());
require("./config/passport");

//home route
app.get("/",(req,res)=>{
    res.send("welcome to home page");
});
//user registration
app.post("/register",async (req,res)=>{
    try{
        const user=await User.findOne({userName: req.body.userName});
        if(user) return res.status(400).send("user already exist");
   
        bcrypt.hash(req.body.password,saltRound,async(err,hash)=>{
            const newUser=new User({
            userName: req.body.userName,
            password: hash,
            });
            await newUser.save().then((user)=>{
                res.status(200).send("user is registered successfully");
            }).catch((err)=>{
                res.status(400).send({
                    message: "user registration failed",
                    err,
                });
            });
    });
    }catch(error){
        res.status(500).send(error.message);
    }
})
//user login
app.post("/login",async(req,res)=>{
    const user=await User.findOne({userName: req.body.userName});
    if(!user){
        return res.status(401).send("user not found");
    };
    if(!bcrypt.compareSync(req.body.password,user.password)) return res.status(401).send("incorrect password");
    const payload={
        id: user._id,
        userName: user.userName,
    };
    const token=jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn: "2d",
    });
    return res.status(200).send({
        message: "user is logged in successully",
        token: "bearer"+token,
    });
});
//user profile
app.get('/profile', passport.authenticate('jwt', { session: false }),
    (req, res)=>{
       return  res.status(200).send({
        id: req.body._id,
        userName: req.body.userName,
       });
    }
);
//ivalid url
app.use((req,res,next)=>{
    res.status(401).json({
        message : "invalid url"
    });
});
//server error
app.use((err,req,res,next)=>{
    res.status(500).send("sever broke");
})
module.exports=app;