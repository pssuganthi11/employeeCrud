const express = require('express');
const router = express.Router();
const { 
    CreateEmployee, 
    getAllEmployees, 
    getemployeebyID, 
    updateEmployeebyId, 
    deleteEmployeebyId 
} = require('../controllers/employeeController');

/**
 * @swagger
 * /api/employees:
 * post:
 * summary: Create a new employee
 * tags: [Employees]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * name:
 * type: string
 * email:
 * type: string
 * role:
 * type: string
 * responses:
 * 201:
 * description: Employee created successfully
 */
router.post('/', CreateEmployee);

/**
 * @swagger
 * /api/employees:
 * get:
 * summary: Get all employees
 * tags: [Employees]
 * responses:
 * 200:
 * description: List of all employees
 */
router.get('/', getAllEmployees);

/**
 * @swagger
 * /api/employees/{id}:
 * get:
 * summary: Get employee by ID
 * tags: [Employees]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * description: The employee ID
 * responses:
 * 200:
 * description: Employee details
 */
router.get('/:id', getemployeebyID);

/**
 * @swagger
 * /api/employees/{id}:
 * put:
 * summary: Update an employee
 * tags: [Employees]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * responses:
 * 200:
 * description: Employee updated
 */
router.put('/:id', updateEmployeebyId);

/**
 * @swagger
 * /api/employees/{id}:
 * delete:
 * summary: Delete an employee
 * tags: [Employees]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: string
 * responses:
 * 200:
 * description: Employee deleted
 */
router.delete('/:id', deleteEmployeebyId);

module.exports = router;