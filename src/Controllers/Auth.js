const express=require('express')
const router=express.Router()
const connection=require("../Utils/db.js")

router.post('/',(req,res)=>{
    //var user=req.body;
    console.log(req.body);
    connection.query(`select * from practica.users where name="${req.body.name}" and password ="${req.body.password}"`,function(err,result){
        if(err) console.log("error"+err);
        res.send("Result: "+JSON.stringify(result));
    });
})

//  function getData (){
//     router.get('/',(req,res)=>{
//         res.send('Merge')
//     })
// }
// module.exports={
//     router:router,
//     getData:getData}
module.exports=router