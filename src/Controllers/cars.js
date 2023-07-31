const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//preluare date din baza de date / afisare
router.get('/car',(req,res)=>{
    console.log(req.body);
    connection.query(`select * from practica.cars`,function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
})

//creare/adaugare masina => inserare in baza de date
router.post('/car',(req,res)=>{
    connection.query(`insert into practica.cars values("${req.body.idcars}", "${req.body.brand}", "${req.body.model}", "${req.body.culoare}", "${req.body.range}")`,function(err,result){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})

module.exports= router
