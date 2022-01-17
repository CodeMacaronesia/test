const express = require('express');
const morgan = require('morgan');

const app = express();

//environment variables
//Explicación de process.env si en el ordenador que estoy corriendo justo ahora existe un puerto definido úsalo, si no existe usa el 4000
app.set ('port', process.env.PORT || 4000);


app.use(morgan('dev'));
//Después de que morgan registre lo que está llegando importamos las rutas...
//Lo de "/api/employees" es para ahorrar poner eso en cada una de las peticiones, es como un comodín
app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;
