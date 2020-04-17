const mongoose = require('mongoose');

const Qualificador = mongoose.model('Qualificador');
const Sintoma = mongoose.model('Sintoma');

module.exports = {
    async index(req, res){
        const qualificador = await Qualificador.find();

        return res.json(qualificador);
    },

    async show(req, res){
        const qualificador = await Qualificador.findById(req.params.id);

        return res.json(qualificador);
    },

    async store(req, res){

        const { sintomaId: sintoma, title }  = req.body;
        const qualificador = await Qualificador.create({sintoma, title});

        await qualificador.save();

        const sintomaById = await Product.findById(sintoma);

        sintomaById.qualificadores.push(qualificador)
        sintomaById.save();



        return res.json(qualificador);
    },

    async update(req, res){
        const qualificador = await Qualificador.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(qualificador);
    },

    async destroy(req, res){
        await Qualificador.findByIdAndRemove(req.params.id);

        return res.send();
    }
};