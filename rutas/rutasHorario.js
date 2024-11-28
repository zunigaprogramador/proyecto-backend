
module.exports = (app) => {
   
    
    var horarioCtrl = require('../controladores/horarioControlador');

app.route('/crear') //crear horario
.post(horarioCtrl.crearHorario);


app.route('/:paseadorId')  //obtener horario por paseador
.get(horarioCtrl.obtenerHorariosPorPaseador);


app.route('/eliminar') // Eliminar horario
.post(horarioCtrl.eliminarHorario);

app.route('/disponibilidad') // ver disponibilidad de agenda
.post(horarioCtrl.verificarDisponibilidad);

};
