const mongoose = require('mongoose');

const UnidadesAtendimentoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    
});

mongoose.model('UnidadesAtendimento', UnidadesAtendimentoSchema);