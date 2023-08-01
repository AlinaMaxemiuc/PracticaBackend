const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//preluare date din baza de date / afisare
router.get('/rentals',(req,res)=>{
    console.log(req.body);
    connection.query(`select * from practica.rentals`,function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
})


//inchiriere masina => inserare in baza de date
router.post('/rentals',(req,res)=>{
    connection.query(`insert into practica.rentals(iduser,idcar,startDate,stopDate) values("${req.body.iduser}", "${req.body.idcar}", "${req.body.startDate}", "${req.body.stopDate}")`,function(err,result){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})
//stergere user din baza de date
router.delete('/rentals',(req,res)=>{
    connection.query(`delete from practica.rentals where iduser=3`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})

module.exports= router
