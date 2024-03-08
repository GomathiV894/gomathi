const express=require('express');
const app=express();
const path=require('path');
const router=require('./router');
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"10MB"}));
app.use('/',router);

//const PORT=process.env.PORT|| 2000;
app.post("/data",(req,res)=>{
    let data=req.body;
    console.log(data)
});
app.listen(3000,()=>{
    console.log("Farmcrop Running ");
});