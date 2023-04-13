const users=require("../models/user.model");
const path=require("path");

exports.getUser=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../vews/user.html"));
};
exports.saveUser=(req,res)=>{
    const userName=req.body.getUserName;
    const userAge=Number(req.body.getUserAge);
    const user={
        userName,
        userAge
    }
    users.push(user);
    res.status(200).json({
        success:true,
        users
    })
};