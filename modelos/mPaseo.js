const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schPaseos = new Schema({
    fecpas: { type: Date, required: "fecha es obligatoria" },
    horpas: { type: mongoose.Schema.Types.ObjectId, ref: 'Horario', required: "horario es obligatorio" },
    tiepas: { type: Number, min: 1, max: 3, required: "la duración en horas es obligatoria" }, // Máximo 3 horas por paseo
    masid: { type: mongoose.Schema.Types.ObjectId, ref: 'Mascota', required: "id mascota es obligatorio" },
    pasid: { type: mongoose.Schema.Types.ObjectId, ref: 'Paseadore', required: "id paseador es obligatorio" },
    novpas: { type: String, required: "novedades es obligatoria" }
});

module.exports = mongoose.model('Paseo', schPaseos);