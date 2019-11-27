const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Usuario = mongoose.model('Usuario');


module.exports = {

    async store(req, res){
      
        const {email, password} = req.body;

        const usuario = await Usuario.findOne({email});
        console.log(usuario);
        return res.json(usuario);

        // if(!usuario) {
        //     return res.status(400).json({error: 'User not found'});
        // }
           
        // if(!await bcrypt.compare(password, usuario.password))
        //     return res.status(400).json({error: 'Invalid passsword'});

        // return res.json({status: true});
    },
};