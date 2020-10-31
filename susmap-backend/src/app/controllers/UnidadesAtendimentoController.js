const mongoose = require('mongoose');
const ServicoController = require('./ServicoController');
const { json } = require('body-parser');

const UnidadesAtendimento= mongoose.model('UnidadesAtendimento');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
       // const products = await Product.paginate({}, { page, limit: 12});
       const unidade = await UnidadesAtendimento.find().populate('servicos');

        return res.json(unidade);
    },

    async show(req, res){
        const unidade = await UnidadesAtendimento.findById(req.params.id).populate('servicos');

        return res.json(unidade);
    },

    async store(req, res){
        const unidade = await UnidadesAtendimento.create(req.body);
        await   unidade.save();

        res.status(200);
        return res.json({'message':'Unidade de atendimento inserida com sucesso.'});
    },

    async update(req, res){
        const unidade = await UnidadesAtendimento.findById(req.params.id, req.body, {new: true});

        if(unidade){
            unidade.update();
            res.status(200);
            return res.json({'message':'Unidade de atendimento atualizada com sucesso.'});
        }else {
            res.status(503);
            return res.json({'message':'Unidade de atendimento não existente.'});
        }
    },

    // TODO[Demóstenes] remove um serviço associado à unidade de atendimento
    async remove_servico(req, res){
        const unidade = await UnidadesAtendimento.findById(req.params.id, req.body, {new: true});
        const servico = await ServicoController.findById(req.params.id_servico);

        if(unidade){
            if(servico){
                if(unidade.servicos.find(servico)){
                    unidade.servicos.remove(servico);
                    await unidade.update();
                    res.status(200);
                    return res.json({'message':'Unidade de atendimento atualizada com sucesso'});

                }else {
                    res.status(503);
                    return req.json({'meessage':'O serviço não está associado à unidade de atendiento.'})
                }
            }else {
                res.status(503);
                return req.json({'meessage':'O serviço é inexistente.'})
            }
        }else {
            res.status(503);
            return req.json({'meessage':'A unidade de atendimento é inexistente.'})
        }
    },

    async destroy(req, res){
        await UnidadesAtendimento.findByIdAndRemove(req.params.id);

        return res.send();
    }
};