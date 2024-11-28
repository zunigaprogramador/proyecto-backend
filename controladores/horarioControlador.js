
const Horario = require('../modelos/mHorario');
const Paseo = require('../modelos/mPaseo'); // Para integración con los paseos

// Crear un nuevo horario para un paseador
exports.crearHorario = async (req, res) => {
  try {
    const nuevoHorario = new Horario(req.body);
    const horarioGuardado = await nuevoHorario.save();
    res.status(201).json(horarioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Consultar horarios de un paseador específico
exports.obtenerHorariosPorPaseador = async (req, res) => {
  try {
    const horarios = await Horario.find({ paseador: req.params.paseadorId });
    res.status(200).json(horarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verificar disponibilidad de un paseador en un día específico
exports.verificarDisponibilidad = async (req, res) => {
  try {
    const { paseadorId, diaSemana, horaInicio, horaFin } = req.body;

    // Verificar si el paseador ya tiene paseos en el horario solicitado
    const horarios = await Horario.findOne({
      paseador: paseadorId,
      diaSemana,
      $or: [
        { horaInicio: { $lt: horaFin, $gte: horaInicio } },
        { horaFin: { $gt: horaInicio, $lte: horaFin } }
      ]
    });

    if (horarios) {
      res.status(200).json({ disponible: false, message: 'El paseador no está disponible en este horario.' });
    } else {
      res.status(200).json({ disponible: true, message: 'El paseador está disponible.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Eliminar horario
exports.eliminarHorario = async (req, res) => {
  try {
      const horarioEliminado = await Horario.findByIdAndDelete(req.body.id);
      if (!horarioEliminado) return res.status(404).json({ message: 'Horario no encontrado' });
      res.status(200).json({ message: 'Horario eliminado' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
