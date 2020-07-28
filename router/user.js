import express from "express";
import {v4 as uuidv4 } from 'uuid';


const router = express.Router();


const users = []

// all routes over here are starting with /users for '/'
router.get('/', (req ,res ) =>{

    res.send(users);

} )


router.post('/', (req, res)=> {

    const newUser = req.body;

    const newUserWithID = {... newUser, id: uuidv4()};

    users.push(newUserWithID);

    res.send(`Added new employee ${newUser['firstName']} as ${newUser['occupation']} and saved to Company Database!`);


});

// Getting the User profile using the unique id of the user, and /: reterives everything after that
router.get('/:id', (req, res) => {

    const {id} =  req.params;
    console.log(req.params);

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})

export default router;



// {
//     "firstName": "Hitesh Saai",
//     "lastName": "Mananchery",
//     "age": 25,
//     "occupation": "Software Engineer"
// },
// {
//     "firstName": "John",
//     "lastName": "Mick",
//     "age": 25,
//     "occupation": "Data Scientist"
// },
// {
//     "firstName": "john",
//     "lastName": "den",
//     "age": 22,
//     "occupation": "Data Analyst"
// }