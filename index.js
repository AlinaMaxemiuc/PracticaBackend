const express=require('express')
const app = express()
const db = require("./src/Controllers/dbController.js")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//const conn = require("../App/Utils/db.js");

// router.all('/',function(req,res){
//     res.send("incercare")
// })

// app.use(auth.router)
// auth.getData();

 app.use('/',db);
// db.get();


port=3001
app.listen(port,()=>{
   console.log(`Database connection is ready and `+`Server connected to port:  ${port}`)
})

