

module.exports = (app) => {
    var pasCtrl = require('../controladores/paseadorControlador');

    app.route('/pas/getAllPas') // Consultar todos los paseadores
        .get(pasCtrl.getAllPas);

    app.route('/pas/insPas')  // Insertar - crear paseadores
        .post(pasCtrl.insPas);

    app.route('/pas/getPas/:id') // Consultar paseador por id
        .get(pasCtrl.getPasById);

    app.route('/pas/updPas')   // Modificar paseador
        .post(pasCtrl.updPas);

    app.route('/pas/eliPas')  // Eliminar paseador
        .post(pasCtrl.eliPas);


};




