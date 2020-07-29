import express from "express";

import * as request  from '../controller/userRequest.js';


const router = express.Router();

// Using the POST request the users get's updated
let users = []

// all routes over here are starting with /users for '/'
router.get('/', request.getUser);

// to add User to the database
router.post('/', request.addUser);

// Getting the User profile using the unique id of the user, and /: reterives everything after that
router.get('/:id', request.getUserbyID );

// TO delete the user based on the User ID
router.delete('/:id', request.deleteUser);

// To update the user based on the User ID
router.patch('/:id', request.updateUser);

export default router;
