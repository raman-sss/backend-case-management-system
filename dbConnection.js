const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('vacaybeginslocal', 'root', 'root', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql',
  logging: true, // Set to true to see SQL queries in the console
});

const testConnection = async () => {
  try { 
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = testConnection;