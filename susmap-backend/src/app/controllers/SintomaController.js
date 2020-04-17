const mongoose = require('mongoose');

const Sintoma = mongoose.model('Sintoma');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
       // const products = await Product.paginate({}, { page, limit: 12});
       const sintoma = await Sintoma.find().populate('qualificadores');

        return res.json(sintoma);
    },

    async show(req, res){
        const sintoma = await Sintoma.findById(req.params.id).populate('qualificadores');

        return res.json(sintoma);
    },

    async store(req, res){
        const sintoma = await Sintoma.create(req.body);

        return res.json(sintoma);
    },

    async update(req, res){
        const sintoma = await Sintoma.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(sintoma);
    },

    async destroy(req, res){
        await Sintoma.findByIdAndRemove(req.params.id);

        return res.send();
    }
};