const express=require('express')
const router=express.Router()

 function getData (){
    router.get('/',(req,res)=>{
        res.send('Merge')
    })
}
module.exports={
    router:router,
    getData:getData}
