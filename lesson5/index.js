const express=require("express");
const app=express();
const multer=require("multer");
const port=3000;

app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html");
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const imageName = Date.now() + '-' + file.originalname;
      cb(null,imageName);
    }
});
  
const upload = multer({ storage: storage });

app.post("/register",upload.single('image'),(req,res)=>{
    res.status(200).send("image is uploaded");
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});