const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
  paseador: { type: mongoose.Schema.Types.ObjectId, ref: 'Paseadore', required:"nombre del paseadoor es obligatorio" },
  diaSemana: { type: String, enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], required: "´día de la semana es obligatorio" },
  horaInicio: { type: Number, min: 7, max: 19, required: "hora de inicio es obligatorio" },
  horaFin: { type: Number, min: 7, max: 19, required: "hora fin es obligatorio" },
  ocupado: { type: Boolean, default: false }
});

module.exports = mongoose.model('Horario', horarioSchema);