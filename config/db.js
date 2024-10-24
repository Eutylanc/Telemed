// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '32939389Euty!',
//   database: 'telemedicine'
// });

// module.exports = pool;


const Sequelize = require('sequelize');

const sequelize = new Sequelize('telemedicine', 'root', '32939389Euty!', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;