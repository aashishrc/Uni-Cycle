const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
require('dotenv').config();


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
