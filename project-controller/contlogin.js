const con=require("../project-db/db");
const jwt=require("jsonwebtoken")
module.exports=async (req)=>{
    let prom=new Promise((resolve,reject)=>{
        if(req.email!=undefined && req.email!='' && req.password!=undefined && req.password!='')
            {
                let check_query=`select id from users where email = '${req.email}' and password ='${req.password}'`
                con.query(check_query,(err,result)=>{
                    if(result.length!=0)
                    {
                       const token= jwt.sign({email:req.email},'iamabhishek',{expiresIn:"60m"})
                        let insert_query=`update  users set accesstoken='${token}' where email = '${req.email}'`
                        con.query(insert_query,(err,result)=>{
                            if(err)
                            {
                                console.log(err);
                            }
                            resolve({status:200,msg:"login success",token:token})
                        })
                    }
                    else
                    {
                        reject({msg:"email and password are incorrect"})
                    }
                })
            }
        else
            {
                reject({status:201,msg:"email and password are required fields"})
            }
    })
    return prom
}