const express=require('express');
const app=express();
const userRouter=require("./routers/user.routes");

app.use("/api/user/",userRouter);
app.use("/",(req,res)=>{
    res.send("Request from home page");
});
app.use((req,res)=>{
    res.send("404 not found.");
});
module.exports=app;