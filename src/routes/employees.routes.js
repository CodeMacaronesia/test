const { Router } = require('express');
const router = Router();

//En esta constante importo todo lo que viene de: ../controllers/employees.controller.js
const employeeCtrl = require('../controllers/employees.controller.js')
//CRUD 
//CREATE - READ - UPDATE - DELETE
//AQUÍ CREAMOS LAS RUTAS DE LA API RESTFULL

// Ya tengo /api/employees delante por el comodín de app.js
router.get('/', employeeCtrl.getEmployees);
// Ya tengo /api/employees delante por el comodín de app.js
router.post('/', employeeCtrl.createEmployee);
// Ya tengo /api/employees delante por el comodín de app.js
// Ejemplo de esta URL: '/api/employees/:id'
router.get('/:id', employeeCtrl.getEmployee);
// Ya tengo /api/employees delante por el comodín de app.js
router.put('/:id', employeeCtrl.editEmployee);
// Ya tengo /api/employees delante por el comodín de app.js
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;