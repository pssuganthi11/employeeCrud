const express = require('express');
const router = express.Router();
const { CreateEmployee, getAllEmployees,getemployeebyID,updateEmployeebyId,deleteEmployeebyId } = require('../controllers/employeeController');

router.post('/', CreateEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getemployeebyID);
router.put('/:id', updateEmployeebyId);
router.delete('/:id', deleteEmployeebyId);



module.exports = router;