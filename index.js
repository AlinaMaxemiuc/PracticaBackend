const express=require('express')
const app = express()
const db = require("./src/Controllers/dbController.js")
const login=require("./src/Controllers/Auth.js")
const cars=require("./src/Controllers/cars.js")
const rentals=require("./src/Controllers/rentals.js")
const cors = require('cors')
const bodyParser = require('body-parser')

const bcrypt=require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword ="parola"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//pentru criptarea parolei
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

//conectare
var corsOptions = {
   origin: 'http://localhost:3000',
   optionsSuccessStatus: 200 
 }
app.use(cors(corsOptions));
 app.use('/',db);
//apel pt pagina de login
 app.use('/login', login);

 //afisare masini
 app.use('/',cars);

 //afisare inchirieri
 app.use('/',rentals);


//portul si verificare conectare la server
port=3001
app.listen(port,()=>{
   console.log(`Database connection is ready and `+`Server connected to port:  ${port}`)
})

