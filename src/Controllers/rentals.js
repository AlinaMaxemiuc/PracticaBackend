const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

//preluare date din baza de date / afisare
router.get('/rentals',(req,res)=>{
    console.log(req.body);
    connection.query(`select u.name, c.brand, c.model, r.startDate, r.stopDate 
    from practica.rentals r, practica.users u, practica.cars c 
    where r.iduser=u.idusers and r.idcar=c.idcars;`,function (err, result) {
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
router.delete('/rentals/:rentalId', (req, res) => {
    const rentalId = req.params.rentalId;

    connection.query('DELETE FROM practica.rentals WHERE idrentals = ?', [rentalId], function(err, result, fields) {
        if (err) {
            console.log("error: " + err);
        } else {
            res.send(JSON.stringify({ message: "Rental deleted successfully"}));
        }
    });
});
//preluare brand 
router.get('/brand',(req,res)=>{
    connection.query(`select c.idcars, c.brand, c.model from practica.cars c`,function(err,result,fields){
        if(err) console.log("error"+err);
        res.send(JSON.stringify(result));
    });
})
module.exports= router
