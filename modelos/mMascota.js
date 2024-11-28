const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nommas: { type: String, required: "Nombre es obligatorio", maxlength: 100 },
    edad: { type: Number, required: "La edad es obligatoria" },
    raza: { type: String, required: "La raza es obligatoria", maxlength: 50 },
    genero: { type: Number, required: "El género es obligatorio" }, // 1: Macho, 2: Hembra
    recomendaciones: { type: String, required: "Las recomendaciones son obligatorias", maxlength: 250 }
});

module.exports = mongoose.model('Mascota', mascotaSchema);

