
module.exports = (app) => {
    var psoCtrl = require(`../controladores/paseoControlador`);

    app.route(`/pso/getAllPase`) // Consultar todos los paseos
        .get(psoCtrl.getAllPase);

    app.route(`/pso/insPase`)  // Insertar - crear los paseos
        .post(psoCtrl.insPase);

    app.route(`/pso/getPase/:id`) // Consultar los paseos
        .get(psoCtrl.getPaseById);

    app.route(`/pso/updPase`) // Modificar los paseos
        .post(psoCtrl.updPase);

    app.route(`/pso/eliPase`) // Eliminar los paseos
        .post(psoCtrl.eliPase);
};