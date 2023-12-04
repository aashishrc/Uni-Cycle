const express = require("express");
const bcrypt = require("bcrypt");
const userController = express.Router();
const { User } = require("../models/bootstrap");
const { check, validationResult } = require('express-validator');
const SALT_ROUNDS = 10;

const createUser = async (req, res) => {
  // validate the req body
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Please provide a valid request body' });
  }

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'Bad request: User with this username already exists',
      });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    // Create the user with the incremented ID
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: hashedPassword,
    });

    // Send the response
    res.status(201).json({
      id: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      username: newUser.username,
      createdAt: newUser.createdAt.toISOString(),
      updatedAt: newUser.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'Bad request: User with this username already exists or check the input',
    });
  }
};

// update method
// update method
const updateUser = async (req, res) => {
    try {
      // validate the req body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Please provide the valid request body' });
      }
  
      // find the current user
      const currentUser = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!currentUser) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const { first_name, last_name, password } = req.body;
  
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
  
      await User.update(
        {
          first_name,
          last_name,
          password: hashedPassword,
        },
        {
          where: {
            id: currentUser.id,
          },
        }
      );
  
      return res.status(200).json({
        message: 'User updated successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'An error occurred while updating user',
        error: error,
      });
    }
  };
  
  // delete user
  const deleteUser = async (req, res) => {
    try {
      // find the current user
      const currentUser = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (!currentUser) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      await User.destroy({
        where: {
          id: currentUser.id,
        },
      });
  
      return res.status(200).json({
        message: 'User deleted successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'An error occurred while deleting user',
        error: error,
      });
    }
  };
  
module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser
};
