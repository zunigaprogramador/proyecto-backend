
const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schDuenos = new Schema({
    nomdue: { type: String, required: "nombre es obligatorio" },
    teldue: { type: String, required: "telefono es obligatorio" },
    dirdue: { type: String, required: "direccion es obligatorio" },
    cordue: { type: String, required: "correo es obligatorio" }
});

module.exports = mongoose.model('Dueno', schDuenos);


