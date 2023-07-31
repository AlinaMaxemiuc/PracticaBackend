const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//verifica daca exista userul in baza de date, user dat de mine in postman
router.post('/',(req,res)=>{
    console.log(req.body);
    connection.query(`select * from practica.users where name="${req.body.name}" and password ="${req.body.password}"`,function(err,result){
        if(err) console.log("error"+err);
        res.send(result[0]);
    });
})

module.exports=router