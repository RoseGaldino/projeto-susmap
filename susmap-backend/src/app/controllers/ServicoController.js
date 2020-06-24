const mongoose = require('mongoose');

const Servico = mongoose.model('Servico');

module.exports = {
    async index(req, res){
        const servico = await Servico.find();

        return res.json(servico);
    },

    // TODO [Demóstenes] Implementar o método 'show' para a retorna o serviço a partir do 'codigo'
    async show(req, res){
        const servico = await Servico.findById(req.params.id);

        return res.json(servico);
    },

    async store(req, res){
        const { codigo, nome, descricao }  = req.body;

        const servico = await Servico.create({codigo, nome, descricao});
        await servico.save();
        res.status(200);
        
        return res.json({'message':'Servico inserido com sucesso.'});
    },

    async update(req, res){
        const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(servico);
    },

    async destroy(req, res){
        const servico = await Servico.findByIdAndRemove(req.params.id);

        if(servico){
            res.status(200);
            return res.json({'message':'Serviço removido com sucesso.'});
        }else {
            res.status(503);
            return res.json({'message':'Serviço não existente.'});
        }
    }
};