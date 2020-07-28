import express from "express";

const router = express.Router();


const user = [
    {
        firstName: "Hitesh Saai",
        lastName: "Mananchery",
        age: 25,
        occupation: "Software Engineer"
    },
    {
        firstName: "John",
        lastName: "Mick",
        age: 25,
        occupation: "Data Scientist"
    }
]

// all routes over here are starting with /users for '/'
router.get('/', (req ,res ) =>{

    res.send(user);

} )


router.post('/', (req, res)=> {

    const newUser = req.body;
    user.push(newUser)
    res.send(`Added new employee ${newUser['firstName']} as ${newUser['occupation']} and saved to Company Database!`);


});


export default router;