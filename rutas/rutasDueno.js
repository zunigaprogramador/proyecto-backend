

module.exports = (app) => {
    var dueCtrl = require('../controladores/duenoControlador');

    app.route('/due/getAllDue') // Consultar todos los dueños
        .get(dueCtrl.getAllDue);

    app.route('/due/insDue')  // Insertar - crear dueños
        .post(dueCtrl.insDue);

    app.route('/due/getDue/:id') // Consultar dueños por id
        .get(dueCtrl.getDueById);

    app.route('/due/updDue') // Modificar dueños
        .post(dueCtrl.updDue);

    app.route('/due/eliDue') // Eliminar dueños
        .post(dueCtrl.eliDue);
};

  