const express = require('express');
const cors = require('cors');
//const requireDir = require('require-dir');

//Parte da autenticação
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//Iniciando o App
const app = express();
// app.use(express.json());
app.use(cors());

//Parte da autenticação
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//app.use(cors());
//app.use(require('./src/routes'))

//Iniciando o Banco de dados
//mongoose.connect('mongodb://adminrose@roseadmin');
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});

require('./src/app/models/Sintoma');
require('./src/app/models/Qualificador');
require('./src/app/models/Usuario');
require('./src/app/models/Servico');

const Qualificador = mongoose.model('Qualificador');
const Servico = mongoose.model('Servico');

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3000, (req, res) => {
    console.log("OK");
});

//Primeira rota

// app.get("/", (req, res)=>{
//     Qualificador.create({title: 'testeQualificador', 
// });
//     return res.send("Hello, Rose!");
// });

/*
module.exports = app;
*/