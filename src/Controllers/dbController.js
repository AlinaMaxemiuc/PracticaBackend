const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

// function get(){
//     router.get('/',(req,res)=>{
//        res.send( connection.query(`select * from practica.users`, function(err,result,fields){
//             if(err) console.log("error"+ err);
//             console.log(result);
//         }));
//     })
// }

router.get('/get',(req,res)=>{
      connection.query(`select * from practica.users`,function (err, result) {
        if (err) throw err;
        res.send("Result: " + JSON.stringify(result));
      });
     
})

router.post('/post',(req,res)=>{
    //var user=req.body;
    console.log(req.body);
    connection.query(`insert into practica.users values("${req.body.idusers}", "${req.body.name}", "${req.body.age}")`,function(err,result){
        if(err) console.log("error"+err);
        res.send("Result: "+JSON.stringify(result));
    });
})

router.put('/put',(req,res)=>{
    connection.query(`update practica.users set age=29 where idusers=2`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send("Result: "+JSON.stringify(result));
    });
})

router.delete('/delete',(req,res)=>{
    connection.query(`delete from practica.users where idusers=9`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send("Result: "+JSON.stringify(result));
    });
})
module.exports= router

// conn.query(`update practica.users set name="Apetrei Madalina" where idusers=2`,function(err,result,fields){
//     if(err) console.log("error"+ err);
//     console.log(result);
// });
//connection.end();