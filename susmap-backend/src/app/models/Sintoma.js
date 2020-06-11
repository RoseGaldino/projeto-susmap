const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SintomaSchema = new mongoose.Schema({ 
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    qualificadores:[{
        type: mongoose.Schema.Types.ObjectId, ref:'Qualificador',
    }]
});

SintomaSchema.plugin(mongoosePaginate);

const sintoma = mongoose.model('Sintoma', SintomaSchema);

module.exports = sintoma; 