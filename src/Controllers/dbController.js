const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//preluare date din baza de date / afisare
router.get('/db',(req,res)=>{
      connection.query(`select * from practica.users`,function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
     
})

//creare user / persoana nou => inserare in baza de date
router.post('/db',(req,res)=>{
    //var user=req.body;
    console.log(req.body);
    connection.query(`insert into practica.users values("${req.body.idusers}", "${req.body.name}", "${req.body.age}")`,function(err,result){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})

//actualizare user dupa un anumit criteriu/ update
router.put('/db',(req,res)=>{
    connection.query(`update practica.users set age=30 where idusers=3`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})

//stergere user din baza de date
router.delete('/db',(req,res)=>{
    connection.query(`delete from practica.users where idusers=9`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})

//exportare modul pentru a putea lua datele/functiile/end-point-urile in "index"
module.exports= router
