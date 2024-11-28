
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    usuario: { type: String, required: [true, 'usuario es obligatorio'] },
    password: { type: String, required: [true, 'password es obligatorio'] },

});

module.exports = mongoose.model('Usuario', usuarioSchema);



/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: "nombre es obligatorio" },
    email: { type: String, required: "email es obligatorio", unique: true },
    telefono: { type: String, required: "telefono es obligatorio" },
    direccion: { type: String, required: "direccion es obligatorio" },
    tipoUsuario: { type: String, required: "tipo de usuario es obligatorio" },
    password: { type: String, required: "password es obligatorio" }
});

module.exports = mongoose.model('Usuario', usuarioSchema);*/
