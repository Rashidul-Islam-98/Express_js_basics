const express=require("express");
const { getProducts, saveProducts } = require("../controllers/product.controllers");
const route=express.Router();

route.get("/product",getProducts);
route.post("/product",saveProducts);
module.exports=route;