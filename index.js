const express=require('express')
const app = express()
const db = require("./src/Controllers/dbController.js")
const login=require("./src/Controllers/Auth.js")
const cors = require('cors')
const bodyParser = require('body-parser')

const bcrypt=require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword ="parola"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//pentru criptarea parolei
//
bcrypt
.genSalt(saltRounds)
.then(salt=>{
   console.log(`Salt: ${salt}`);
   return bcrypt.hash(myPlaintextPassword, salt);
})
.then(hash=>{
   console.log(`Hash: ${hash}`);
})
.catch(err=>console.error(err.message));
//const conn = require("../App/Utils/db.js");

// router.all('/',function(req,res){
//     res.send("incercare")
// })

// app.use(auth.router)
// auth.getData();
var corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 
 }
app.use(cors(corsOptions));
 app.use('/',db);


 app.use('/login', login);
// db.get();


port=3001
app.listen(port,()=>{
   console.log(`Database connection is ready and `+`Server connected to port:  ${port}`)
})

