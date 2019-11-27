const moongose = require('mongoose');
const bcrypt = require('bcryptjs');

// Schema - Campos que vamos ter dentro do banco de dados
const UsuarioSchema = new moongose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        //select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

UsuarioSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

moongose.model('Usuario', UsuarioSchema);
