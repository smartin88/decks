import { Sequelize } from 'sequelize';
require('dotenv').config();

const heroku = process.env.HEROKU_URI as string;

const sequelize = new Sequelize(heroku, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
  },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
