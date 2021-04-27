let express=require("express");
let router=express.Router();

let logincont=require("../project-controller/contlogin")

router.post("/login",(req,res)=>
{
    logincont(req.body)
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