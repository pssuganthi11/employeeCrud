
const mongoose = require("mongoose")
const employeemodel = require("../models/EmployeeModel");

// POST /employee
const CreateEmployee = async (req, res) => {
  const { name, email, phone, role, active } = req.body;

  try {
    const newEmployee = await employeemodel.create({
      name,
      email,
      role,
      phone,
      active,
    });
    return res.status(201).json(newEmployee);
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.message || "Failed to create employee" });
  }
};


//GET all employees

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeemodel.find({});
    return res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ error: error.message || "Failed to fetch employees" });
  }
}

//get single employee by id
const getemployeebyID  = async (req,res)=>{
  const {id} = req.params;
  // validate id
  if (!id || !mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid or missing id parameter' });
  }

  try {
    const singleemployee = await employeemodel.findById(id);
    if (!singleemployee) return res.status(404).json({ message: 'No such employee' });
    return res.status(200).json(singleemployee);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch employee by ID: ' + (error.message || error) });
  }
}

// update employee by id and data from req.body
const updateEmployeebyId = async (req, res) => {
  const { id } = req.params;
  if (!id || !mongoose.isValidObjectId(id)) {
    return res.status(404).json({ error: "Invalid or missing id parameter" });
  }
try{
const employee = await employeemodel.findByIdAndUpdate({_id:id},{...req.body})
res.status(200).json({employee})
}catch(error){
  return res.status(500).json({error:"failed to update employee:" +(error.message ||error )});
}
}

//delete employee by id 

const deleteEmployeebyId = async (req,res) =>{
const {id} = req.params;
if(!id || !mongoose.isValidObjectId(id)){
  return res.status(404).json({error:"invalid parameter"}); 
}
try{
  const employee = await employeemodel.findByIdAndDelete({_id:id});
  return res.status(200).json({employee, message:"employee deleted successfully"})
}catch{
  return res.status (500).json({error:"failed to delete employee"});
}
}


module.exports = { CreateEmployee,getAllEmployees,getemployeebyID,updateEmployeebyId,deleteEmployeebyId};
