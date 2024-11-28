
module.exports = (app) => {
    const mascotaCtrl = require('../controladores/mascotaControlador');

    app.route('/mascotas')
        .post(mascotaCtrl.crearMascota) // Crear una nueva mascota
        .get(mascotaCtrl.obtenerMascotas); // Obtener todas las mascotas

    app.route('/mascotas/:id')
        .get(mascotaCtrl.obtenerMascotaPorId) // Obtener una mascota por ID
        .put(mascotaCtrl.modificarMascota) // Modificar una mascota por ID
        .delete(mascotaCtrl.eliminarMascota); // Eliminar una mascota por ID
};
