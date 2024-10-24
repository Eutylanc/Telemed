const Sequelize = require('sequelize');

const sequelize = new Sequelize('telemedicine', 'root', 'nnnnn', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;