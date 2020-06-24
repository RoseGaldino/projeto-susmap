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
    servicos:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Servico',
    }]
});

mongoose.model('UnidadesAtendimento', UnidadesAtendimentoSchema);