const{Create,view}=require('./service');
module.exports={
    Create: (req, res) => {
      const data=req.body;
      Create(data,(error,result)=>{
      if (error) {
        return res.status(404).json({ message: "missing error" })
     }console.log("registerd successfully!");
     return res.status(200).json({status:true,data:result})
  }); 
    },
    view:(req,res)=>{
        const data=req.body;
        view(data,(error,result)=>{
            if(error){
                return res.status(500).json({message:"Internal Server error"})
            }console.log("view Details");
            return res.status(200).json({status:true,data:result})
        });
            }
        }

    


        

