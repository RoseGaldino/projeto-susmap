const mongoose = require('mongoose');

const Qualificador = mongoose.model('Qualificador');
const Product = mongoose.model('Product');

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
        //console.log(req.body);
        const { productId: product, title }  = req.body;
        const qualificador = await Qualificador.create({product, title});

        await qualificador.save();

        const productById = await Product.findById(product);

        productById.qualificadores.push(qualificador)
        productById.save();



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