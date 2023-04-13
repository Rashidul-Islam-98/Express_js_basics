const registerUser=(req,res)=>{
    try{
        const {name,email,password,dob}=req.body;
        const user={name,email,password,dob};
        res.status(200).json({
            user
        });
    }catch(error){
       return  res.status(500).json({
            message: error.message
        })
    }
};
module.exports={registerUser};
