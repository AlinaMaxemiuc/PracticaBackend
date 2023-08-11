const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//preluare date din baza de date / afisare
router.get('/car',(req,res)=>{
    console.log(req.body);
    connection.query(`select * from practica.cars `,function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
})
//creare/adaugare masina => inserare in baza de date
router.post('/car',(req,res)=>{
    connection.query(`insert into practica.cars (brand,model,culoare,km) values ("${req.body.brand}", "${req.body.model}", "${req.body.culoare}", ${req.body.km})`,function(err,result){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})
//stergere masina
router.delete('/car/:carId', (req, res) => {
    const carId = req.params.carId;

    connection.query('DELETE FROM practica.cars WHERE idcars = ?', [carId], function(err, result, fields) {
        if (err) {
            console.log("error: " + err);
        } else {
            res.send(JSON.stringify({ message: "Car deleted successfully"}));
        }
    });
});

//actualizare baza de date dupa un anumit criteriu
router.put('/car',(req,res)=>{
    connection.query(`update practica.cars
    set model='A6' where model='Audi A6'`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})
module.exports= router
