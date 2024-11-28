const { default: mongoose } = require("mongoose");
var Schema = mongoose.Schema ;

var schPaseadores = new Schema(
    {
        nompas:    {type:String,Required:"nombre es obligatorio"},
        tipide:    {type:String,Required:"tipo de identificación es obligatorio"},
        numide:    {type:String,Required:"numero de identificación es obligatorio"},
        numcelpas:    {type:String,Required:"teléfono es obligatorio"},
        email:    {type:String,Required:"correo es obligatorio"},
        numcelemp:    {type:String,Required:"telefono empresa es obligatorio"},
        diremp:    {type:String,Required:"dirección empresa es obligatorio"},
        dirpas:    {type:String,Required:"dirección del paseador es obligatorio"},
        imgpas:    {type:String,Required:"foto del paseador es obligatorio"},
        tarifa:    {type:String,Required:"tarifa es obligatoria"},
        calpas:    {type:String,Required:"calificación es obligatoria"}
        
    }
) ;

module.exports = mongoose.model('Paseadore',schPaseadores) ;