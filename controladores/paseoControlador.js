const mongoose = require('mongoose');
var Paseo = require('../modelos/mPaseo');



// Creación de un nuevo paseo

exports.insPase = async (req, res) => {
    const nuevoPaseo = new Paseo(req.body.info);
    try {
        const paseoGuardado = await nuevoPaseo.save();
        res.status(201).json(paseoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Consultar todos los paseos
exports.getAllPase = async (req, res) => {
    try {
        const paseos = await Paseo.find();
        res.status(200).json(paseos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Consultar paseo por ID
exports.getPaseById = async (req, res) => {
    try {
        const paseo = await Paseo.findById(req.params.id);
        if (!paseo) return res.status(404).json({ message: 'Paseo no encontrado' });
        res.status(200).json(paseo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar paseo
exports.updPase = async (req, res) => {
    try {
        const paseoActualizado = await Paseo.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (!paseoActualizado) return res.status(404).json({ message: 'Paseo no encontrado' });
        res.status(200).json(paseoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar paseo
exports.eliPase = async (req, res) => {
    try {
        const paseoEliminado = await Paseo.findByIdAndDelete(req.body.id);
        if (!paseoEliminado) return res.status(404).json({ message: 'Paseo no encontrado' });
        res.status(200).json({ message: 'Paseo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
