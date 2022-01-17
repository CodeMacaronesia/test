const app = require('./app');
//app está escuchando por el puerto 3000/4000 el que sea
app.listen(app.get('port'));

console.log ("Server on port", app.get('port'));

