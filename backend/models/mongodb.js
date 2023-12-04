// models/mongodb.js

const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'mydatabase';
const DB_USERNAME = process.env.DB_USERNAME || 'adminUser';
const DB_PASSWORD = process.env.DB_PASSWORD || 'adminPassword';

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  images: [String],
});

module.exports = { User, Product };
