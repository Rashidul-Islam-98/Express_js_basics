const express=require("express");
const app=express();
const getRoutes=require("./routes/registration.routes");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(getRoutes);

app.get("/",(req,res)=>{
    res.send("server is ok");
})

const port=3000;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});