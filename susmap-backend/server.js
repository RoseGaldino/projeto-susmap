const express = require('express');
const cors = require('cors');
//const requireDir = require('require-dir');

const mongoose = require('mongoose');
//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());


//app.use(cors());
//app.use(require('./src/routes'))

//Iniciando o Banco de dados
//mongoose.connect('mongodb://adminrose@roseadmin');
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});

require('./src/app/models/Product');
require('./src/app/models/Qualificador');
//requireDir('./src/app/models');
//const Product = mongoose.model('Product');
const Qualificador = mongoose.model('Qualificador');

//Rotas

app.use("/api", require("./src/routes"));

app.listen(3000, (req, res) => {
    console.log("OK");
});


//Primeira rota

app.get("/", (req, res)=>{
    Qualificador.create({title: 'testeQualificador', 
});
    return res.send("Hello, Rose!");
});

/*
module.exports = app;
*/