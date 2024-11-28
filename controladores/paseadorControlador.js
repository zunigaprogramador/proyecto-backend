const mongoose = require('mongoose');
var Paseadore = require('../modelos/mPaseador');

// CONSULTA TODOS LOS PASEADORES
exports.getAllPas = async function(req, res) {
    try {
        const rta = await Paseadore.find({});
        console.log("Rta del servidor bbdd:" + rta);
        res.send({ msg: "OK CONSULTADOS", info: rta });
    } catch (error) {
        console.log("ERR: consultando paseadores - " + error);
        res.send({ msg: "ER", info: "Informacion no disponible" });
    }
};

// Creación de un nuevo paseador
exports.insPas = async (req, res) => {
    const nuevoPaseador = new Paseadore(req.body.info);
    try {
        const paseadorGuardado = await nuevoPaseador.save();
        res.status(201).json(paseadorGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Consultar paseador por ID
exports.getPasById = async (req, res) => {
    try {
        const paseador = await Paseadore.findById(req.params.id);
        if (!paseador) return res.status(404).json({ message: 'Paseador no encontrado' });
        res.status(200).json(paseador);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar paseador
exports.updPas = async (req, res) => {
    try {
        const PaseadorActualizado = await Paseadore.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (!PaseadorActualizado) return res.status(404).json({ message: 'Paseador no encontrado' });
        res.status(200).json(PaseadorActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar paseador
exports.eliPas = async (req, res) => {
    try {
        const PaseadoreEliminado = await Paseadore.findByIdAndDelete(req.body.id);
        if (!PaseadoreEliminado) return res.status(404).json({ message: 'Paseador no encontrado' });
        res.status(200).json({ message: 'Paseador eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// CREACION DE PASEADOR ---- Insertar paseador
/*exports.insPas = function(req, res) {
    try {
        if (!req.body.info) {
            return res.status(400).send({ msg: "ER", info: "Datos del paseador incompletos" });
        }   

        const nPas = new Paseadore({
            nompas: req.body.info.nompas,
            tipide: req.body.info.tipide,
            numide: req.body.info.numide,
            numcelpas: req.body.info.numcelpas,
            email: req.body.info.email,
            numcelemp: req.body.info.numcelemp,
            diremp: req.body.info.diremp,
            dirpas: req.body.info.dirpas,
            imgpas: req.body.info.imgpas,
            tarifa: req.body.info.tarifa,
            calpas: req.body.info.calpas
        });

        nPas.save()
        .then(() => {
            res.send({ msg: "OK", info: "Paseador creado - OK" });
        })
        .catch((err) => {
            console.error("Error creando Paseador:", err);
            res.status(500).send({ msg: "ER", info: "Error en la creación del paseador" });
        });
    } catch (error) {
        console.error("ER: en la creación del paseador", error);
        res.status(500).send({ msg: "ER", info: "Error en la creación del paseador" });
    }
};*/

