const express=require("express");
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});

app.use(express.urlencoded({extended:true}));


const userRoutes=require("./routes/user.routes");
app.use(userRoutes);
const productRoutes=require("./routes/products.routes");
app.use(productRoutes);

app.get((req,res,next)=>{
    res.status(404).send("404 not found");
});