import { Application } from 'express';
import sequelize from './models/index';
import router from './router';

const express = require('express');
const cors = require('cors');
const PORT = 3001;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false, alter: true });
    console.log('Connection to DATABASE successful');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server listening at http://localhost:${PORT}`);
});
