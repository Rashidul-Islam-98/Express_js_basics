const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    userName:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        unique: true,
    },
    createdOn:{
        type: Date,
        default: Date.now,
    },
});
const User=mongoose.model("user",userSchema);
module.exports=User;