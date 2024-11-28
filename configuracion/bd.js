//---------------------------------------------
// CONEXION A LA BASE DE DATOS
//---------------------------------------------
const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB conectado exitosamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        process.exit(1); // Detiene la aplicación
    }
};

module.exports = conectarBD;


