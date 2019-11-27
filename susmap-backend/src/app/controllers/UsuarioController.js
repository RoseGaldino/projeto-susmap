const mongoose = require('mongoose');
const express = require('express');
// const bcrypt = require('bcryptjs');

const Usuario = mongoose.model('Usuario');

const router = express.Router();

// router.post('/cadastro', async (req, res) =>{
//     const {email} = req.body;
//     try{
//         if (await Usuario.findOne({ email }))
//         return res.status(400).send({error: "User already exist"});
//         const usuario = await Usuario.create(req.body);  

//         usuario.password = undefined;

//         return res.send({user});
//     }catch(err){
//     return res.status(400).send({error: 'Registration failed'});
// }
// });


module.exports = {

    async index(req, res){
        const {page = 1} = req.query;
       // const products = await Product.paginate({}, { page, limit: 12});
       const usuarios = await Usuario.find();

        return res.json(usuarios);
    },
    async store(req, res){
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
        
    },
};