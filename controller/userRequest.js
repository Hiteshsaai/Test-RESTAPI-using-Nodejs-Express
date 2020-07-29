import {v4 as uuidv4 } from 'uuid';


let users = []

export const getUser = (req ,res ) =>{

    res.send(users);

} 

export const addUser = (req, res)=> {

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


}

export const getUserbyID = (req, res) => {

    const {id} =  req.params;
    console.log(req.params);

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const {id} = req.params;
    
    users = users.filter((user) => user.id !== id);

    res.send(`Employee with ${id} was removed from the database`);

}

export const updateUser = (req, res) => {
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

}