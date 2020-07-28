import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './router/user.js';

// initialzing the express function to a variable
const app = express();

// Initializing the port number 
const PORT = 5000;

// Sending and requesting data through REST API using bodyParser
app.use(bodyParser.json());

//Creating the route
app.get('/', (req, res) => {
    console.log("[TEST]")

    res.send("Hello, welcome to RESTAPI using NODEjs and Express")
})


//To listen for the request from the RESTAPI side
app.listen(PORT, () => console.log(`Server running in this port: http://localhost:${PORT}`));



 