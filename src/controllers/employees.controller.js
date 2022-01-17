// const hello = (req, res) => res.send('hello');
const employeeCtrl = {}

//Guardo las funciones que voy a usar en mi app dentro de employeeCtrl
employeeCtrl.getEmployees = (req, res) => {
    res.send('get employees')
}
employeeCtrl.createEmployee = (req, res) => {
    res.send('create employees')
}
employeeCtrl.getEmployee = (req, res) => {    
    res.send('get employee')
}
employeeCtrl.editEmployee = (req, res) => {
    res.send('edit employees')
}
employeeCtrl.deleteEmployee = (req, res) => {
    res.send('delete employees')
}


module.exports = employeeCtrl;