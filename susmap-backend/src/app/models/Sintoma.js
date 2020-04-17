const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SintomaSchema = new mongoose.Schema({     //Mudar isso aqui para SintomaSchema
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    criatedAt:{
        type: Date,
        default: Date.now,
    },
    qualificadores:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Qualificador'
    }]
});

SintomaSchema.plugin(mongoosePaginate); //mudar para SintomaSchema

const sintoma = mongoose.model('Sintoma', SintomaSchema); //Mudar para sintoma, Sintoma e SintomaSchema

module.exports = sintoma; //Mudar para sintoma 