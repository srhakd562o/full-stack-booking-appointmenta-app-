const User = require('../models/User');

exports.createUser = (req, res) => {
    const { username, phoneNumber, email } = req.body;
    User.create({ username, phoneNumber, email })
        .then(newUser => res.status(201).json(newUser))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getUsers = (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.editUser = (req, res) => {
    const { id } = req.params;
    const { username, phoneNumber, email } = req.body;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return user.update({ username, phoneNumber, email });
        })
        .then(updatedUser => res.json(updatedUser))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return user.destroy();
        })
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
};
