
const mongoose = require('mongoose');
var Usuario = require('../modelos/mUsuario');
const jwt = require ('jsonwebtoken');

const secKey = "millave124";
//EJEMPLO VALIDACIÓN DEL USUARIO Y CREACIÓN DE TOKEN
exports.loginej =function(req, res){
    var miUsr = req.body.usuario;
    var miPas = req.body.password;

    if(miUsr === "miUsr" && miPas === "miPas"){ 
        const miTok = jwt.sign({id:1},secKey,{expiresIn:'1h'});
        res.send( {msg:"OK",info:miTok} ) ;
    } else{
        res.send( { msg:"ER",info: 'Usuario o contraseña no corresponden' } ) ;
    }
};
// EJEMPLO servicio para crear un token para validarlo
exports.miEPxVT =function(req, res){
const tmpTok = req.headers['mitok'];
    jwt.verify(tmpTok, secKey,(err, decoded) =>{
        if (err) {
            res.send( { msg:"ER",info: 'No autorizado' } ) ;    
        }
            res.send( {msg:"OK",info:'Token válido'} ) ;// con el login se llama el token y ese token luego lo copiamos en llamando miEPxVT con GET 
        
    });
};
//VALIDACIÓN DEL USUARIO Y CREACIÓN DE TOKEN
exports.login = function(req, res) {
    try {
        /*var miUsr = req.body.usuario;
        var miPas = req.body.password;*/

        Usuario.find({ usuario: req.body.usuario })
            .then((rta) => {
                console.log("Rta del servidor bbdd:" + rta);
                if (!rta.length) {
                    res.send({ msg: "ER", info: "Usuario o contraseña no corresponde" });  
                }else{
                    const miTok = jwt.sign({id:1},secKey,{expiresIn:'1h'});
                    res.send( {msg:"OK",info:miTok} ) ;
                }
                
            })
            .catch((err) => {
                console.log("ERR:" + err);
                res.send({ msg: "ER", info: "Usuario o contraseña no corresponde" });
            });
    } catch (error) {
        console.log("ERR: consultando usuario - " + error);
        res.send({ msg: "ER", info: "Error en el servidor" });
    }
};

//----------------    
    /*if(miUsr === "miUsr" && miPas === "miPas"){ 
        const miTok = jwt.sign({id:1},secKey,{expiresIn:'1h'});
        res.send( {msg:"OK",info:miTok} ) ;
    } else{
        res.send( { msg:"ER",info: 'Usuario o contraseña no corresponden' } ) ;
    }*/


// Creación de un nuevo usuario

exports.insUsr = async (req, res) => {
    
    const nuevoUsuario = new Usuario(req.body.info);
    try {
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Consultar todos los usuarios
exports.getAllUsr = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Consultar usuario por ID
exports.getUsrById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar usuario
exports.updUsr = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.body.id, req.body, { new: true });
        if (!usuarioActualizado) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar usuario
exports.eliUsr = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.body.id);
        if (!usuarioEliminado) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


/*exports.insUsr = function (req, res) {
    console.log("usuario" + req.body.info.usuario);
    console.log("password" + req.body.info.password);
    
   
    const nuevoUsuario = new Usuario({usuario:req.body.info.usuario,password: req.body.info.password} );
    try {
        nuevoUsuario.save()
        .then( (rta) => {
            res.send( rta ) ;
        } )
        .catch( (err) => {
            res.send( { msg:"ER",info: err} ) ;
        } ) ;
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};*/