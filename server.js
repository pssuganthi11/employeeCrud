const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoute');

// 1. Import Swagger dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

// 2. Swagger Configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Employee Management API',
            version: '1.0.0',
            description: 'Interactive API documentation for the Employee CRUD application',
        },
        servers: [
            {
                // This ensures the "Try it out" feature works on Render
                url: 'https://employeecrud-p35i.onrender.com', 
            },
        ],
    },
    // This tells Swagger to look for documentation in your route files
    apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// 3. Create the documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware
app.use((req, res, next) => {
    console.log('path', req.path, 'method', req.method);
    next();
});

// Routes
app.use("/api/employees", employeeRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`backend started in ${port} and connected to db`);
        });
    }).catch((error) => {
        console.log(error);
    });