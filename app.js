const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const app = express();
app.use(bodyParser.json());
app.use('/api',indexRoutes);

const mongoURI = 'mongodb://localhost:27017/todo-demo';

mongoose
  .connect(mongoURI)
  .then(() => {
  console.log('mongoose connected');
}).catch((err) => {
  console.log('mDB connection fail', err);
});

app.listen(5050, () => {
  console.log('server on 5000');
});