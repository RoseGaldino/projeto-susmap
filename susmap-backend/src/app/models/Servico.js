const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
    codigo:{
        type: Number,
        required: true,
    },
    nome:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    }
});

mongoose.model('Servico', ServicoSchema);