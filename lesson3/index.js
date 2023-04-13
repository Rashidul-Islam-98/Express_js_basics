require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;
console.log(`the port is`);

app.get("/",(req,res)=>{
    res.send("Welcome to server");
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
