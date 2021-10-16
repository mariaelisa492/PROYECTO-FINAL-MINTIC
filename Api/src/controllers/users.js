const Users = require('../models/user');

const createUser = (req, res) => {
    console.log(req.body)
    const newUser = new Users({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        nacionality: req.body.nacionality,
        birthDate: req.body.birthDate,
        role: req.body.role,
        isActive: req.body.isActive
    });

    newUser.save((err, user) => {
        if (err) {
            res.status(400).json({
                message: "Couldn't create please try again"
            });
        } else {
            res.status(200).json({
                message: "User createds",   //agregado exitosamente
                user
            });
        }
    });
};

module.exports = {
    createUser
}