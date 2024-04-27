const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById); // New route for fetching a single user
router.put('/:id', UserController.editUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
