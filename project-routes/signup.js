let express=require("express");
let router=express.Router();

let signupcont=require("../project-controller/contsignup")

router.post("/signup",(req,res)=>
{
    signupcont(req.body)
    .then((result)=>{
        res.json(
                result
        )
    })
    .catch((err)=>{
        res.json(
            err
        )
    })
})

module.exports=router