const mongoose = require('mongoose');

const QualificadorSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    sintoma :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sintoma'
    }
});

mongoose.model('Qualificador', QualificadorSchema);