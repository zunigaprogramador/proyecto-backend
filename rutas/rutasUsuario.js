module.exports = (app) => {
    var usuCtrl = require('../controladores/usuarioControlador');


    app.route('/usu/login')  // generar token
        .post(usuCtrl.login);
    app.route('/usu/miEPxVT')  // para validar Token
        .get(usuCtrl.miEPxVT);
    
    app.route('/usu/insUsr')  // Insertar - crear usuario
        .post(usuCtrl.insUsr);
    
    app.route('/usu/getAllUsr') // Consultar todos los usuario
        .get(usuCtrl.getAllUsr);
    
    app.route('/usu/getUsr/:id') // Consultar usuario por id
        .get(usuCtrl.getUsrById);

    app.route('/usu/updUsr') // Modificar usuario
        .post(usuCtrl.updUsr);

    app.route('/usu/eliUsr') // Eliminar usuario
        .post(usuCtrl.eliUsr);
  


};
