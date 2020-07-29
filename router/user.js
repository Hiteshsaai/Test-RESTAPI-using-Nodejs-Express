import express from "express";
import {v4 as uuidv4 } from 'uuid';


const router = express.Router();

// Using the POST request the users get's updated
let users = []

// all routes over here are starting with /users for '/'
router.get('/', (req ,res ) =>{

    res.send(users);

} )


router.post('/', (req, res)=> {

    const newUser = req.body;

    // EXAMPLE user
    // {
    //     "firstName": "Hitesh Saai",
    //     "lastName": "Mananchery",
    //     "age": 25,
    //     "occupation": "Data Scientist"
    // }

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


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`Employee with ${id} was removed from the database`);

})


router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age, occupation} = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) {
        user.firstName = firstName;
     };

    if (lastName) {
        user.lastName = lastName;
    };

    if (age) {
        user.age = age;
    };

    if (occupation) {
        user.occupation = occupation;
    };

    res.send(`The employee detail for id ${id} has been updated!`)

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