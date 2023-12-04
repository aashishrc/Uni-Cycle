// routes/index.js
const express = require('express');
const userController = require('../controllers/User');
const healthcheckController = require('../controllers/healthcheck');
const router = express.Router();

//healthcheck
router.get('/healthcheck', healthcheckController.healthCheck);

// Create a new user
router.post('/users', userController.createUser);

// Update a user
router.put('/users', userController.updateUser);

// Get user details
router.get('/users', userController.getUser);

//delete user account
router.get('/users', userController.deleteUser);

module.exports = router;
