const products=require("../models/products.model");
const path=require("path");

exports.getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../vews/products.html"));
};
exports.saveProducts=(req,res)=>{
    const productName=req.body.getProductName;
    const productPrice=Number(req.body.getProductPrice);
    const product={
        productName,
        productPrice
    }
    products.push(product);
    res.status(200).json({
        success:true,
        products
    })
};