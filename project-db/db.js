const mysql=require("mysql");
let connection=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"nodereact"
    }
)

connection.connect(err=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("database connected");
    }
})

module.exports=connection