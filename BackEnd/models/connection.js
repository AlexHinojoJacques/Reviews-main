const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0',{useNewUrlParser:true}).then(()=>console.log("Conectado a la base de datos MongoDB."))
.catch(()=>{
    console.error("No se pudo conectar a la base de datos.")
    process.exit();
});