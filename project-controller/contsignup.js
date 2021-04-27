const con = require("../project-db/db")
// let bcrypt=require("bcrypt");
module.exports = async (req) => {
    let fname = req.fname;
    let lname = req.lname;
    let gender = req.gender;
    let email = req.email;
    let phone = req.phone;
    let password = req.password;
    let cpassword = req.cpassword;
    let check_query = `select * from users where email like "${email}"`
    let insert_query = `insert into users(fname,lname,gender,email,phone,password) values("${fname}","${lname}","${gender}","${email}","${phone}","${password}")`
    let prom = await new Promise((resolve, reject) => {
        if (fname != undefined && fname != '' && lname != undefined && lname != ''&& gender != undefined && gender != '' && phone != undefined && phone != '' && password != undefined && password != '' && cpassword != undefined && cpassword != '' && email!=undefined && email!='') {
            if (password == cpassword) {
                con.query(check_query, (err, result) => {
                    console.log(result);
                    if (result.length != 0) {
                        reject({ status: 201, msg: "account with this details already exist" })
                    }
                    else {
                        con.query(insert_query, (err, result) => {
                            resolve({ status: 200, msg: "data inserted" })
                        })
                    }
                })
            }
            else {
                reject({ status: 201, msg: "password and confirm password not matched" })
            }
        }
        else {
            reject({ status: 201, msg: "all fields are required" })
        }
    })
    return prom
}