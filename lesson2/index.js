const express=require("express");
const app=express();
const port=3000;
const bodyParser=require("body-parser");
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/register",(req,res)=>{
    const fullName=req.body.fullName;
    const age=req.body.age;
    res.send(`Your Name: ${fullName} and age: ${age}`);
});