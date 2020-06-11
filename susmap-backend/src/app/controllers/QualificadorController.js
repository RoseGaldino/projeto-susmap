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
        const { sintoma, title }  = req.body;
        const sintomaById = await Sintoma.findById(sintoma);

        if(sintomaById){
            const qualificador = await Qualificador.create({sintoma, title});
            await qualificador.save();
            await sintomaById.qualificadores.push(qualificador)
            await sintomaById.save();

            res.status(200);
            return res.json({'message':'Qualificador inserido com sucesso.'});
        }else {
            res.status(503);
            return res.json({'message':'Sintoma não existente'});
        }
    },

    async update(req, res){
        const qualificador = await Qualificador.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(qualificador);
    },

    async destroy(req, res){
        const qualificador = await Qualificador.findByIdAndRemove(req.params.id);

        if(qualificador){
            res.status(200);
            return res.json({'message':'Qualificador removido com sucesso.'});
        }else {
            res.status(503);
            return res.json({'message':'Qualificador não existente.'});
        }

        //return res.send();
        
    }
};