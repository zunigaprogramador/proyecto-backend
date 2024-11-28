const mongoose = require('mongoose');
var Dueno = require('../modelos/mDueno');

// Consultar todos los dueños
exports.getAllDue = async (req, res) => {
    try {
        const duenos = await Dueno.find();
        res.status(200).json(duenos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Creación de un nuevo dueño

exports.insDue = async (req, res) => {
    const nuevoDueno = new Dueno(req.body.info);
    try {
        const duenoGuardado = await nuevoDueno.save();
        res.status(201).json(duenoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Consultar dueño por ID
exports.getDueById = async (req, res) => {
    try {
        const dueno = await Dueno.findById(req.params.id);
        if (!dueno) return res.status(404).json({ message: 'Dueño no encontrado' });
        res.status(200).json(dueno);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar dueño
exports.updDue = async (req, res) => {
    try {
        const duenoActualizado = await Dueno.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (!duenoActualizado) return res.status(404).json({ message: 'Dueño no encontrado' });
        res.status(200).json(duenoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar dueño
exports.eliDue = async (req, res) => {
    try {
        const duenoEliminado = await Dueno.findByIdAndDelete(req.body.id);
        if (!duenoEliminado) return res.status(404).json({ message: 'Dueño no encontrado' });
        res.status(200).json({ message: 'Dueño eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

