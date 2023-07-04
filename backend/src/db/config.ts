import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  username: 'root',
  password: '@Momo1337',
  database: 'express',
  logging: false,
});

export default connection;
