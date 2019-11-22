const mongoose = require('mongoose');

const QualificadorSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    product :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }
});

mongoose.model('Qualificador', QualificadorSchema);