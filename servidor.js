const express = require('express');
const conectarBD = require('./configuracion/bd'); // Importa la conexión a la base de datos
const path = require('path'); // Necesario si decides usar archivos estáticos
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const cors = require('cors');
const jwt = require ('jsonwebtoken');
const { decode } = require('punycode');

const app = express();
const port = process.env.PORT || 3000; // Usar la variable de entorno para el puerto

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
// Conectar a la base de datos
conectarBD();

// Importar y usar las rutas
require(`./rutas/rutasPaseador`)(app);
require(`./rutas/rutasDueno`)(app);
require(`./rutas/rutasMascota`)(app);
require(`./rutas/rutasUsuario`)(app);
require(`./rutas/rutasPaseo`)(app);
require(`./rutas/rutasHorario`)(app);



// Ruta raíz opcional
app.get('/', (req, res) => {
    res.send('Bienvenido a la app paseadores de mascotas');
});

// Manejo de solicitudes no coincidentes
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


