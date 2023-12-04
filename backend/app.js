// app.js
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv/config');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/v1', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//basic-auth