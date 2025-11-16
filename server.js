const express = require('express')
require("dotenv").config();
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoute');
const app = express();

// parse JSON bodies
app.use(express.json());

const port = process.env.PORT || 5000;

//middleware

app.use((req,res,next)=>{
    console.log('path', req.path, 'method', req.method);
    next();
});
// app.get('/',(req,res)=>{
//     res.send("hello buddy!");
// });


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
app.listen(port,()=>{
    console.log(`backend started in ${port} and connected to db`);
});
}).catch((error)=>{
    console.log(error);
});

app.use("/api/employees",employeeRoutes);