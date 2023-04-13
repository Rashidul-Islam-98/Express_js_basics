const express=require("express");
const { validationCheck } = require("../validationCheck/registration.validationCheck");
const {  registerUser } = require("../controllers/registration.controllers");
const { registrationValidity } = require("../validationCheck/auth");
const routes=express.Router();

routes.post("/register",registrationValidity,validationCheck,registerUser);

module.exports=routes;