
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
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

ProductSchema.plugin(mongoosePaginate);

const product = mongoose.model('Product', ProductSchema);

module.exports = product;