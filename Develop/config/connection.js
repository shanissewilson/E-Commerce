require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = process.env.JAWSDB_URL
 ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
     { host: 'localhost', dialect: 'mysql', dialectOptions: { decimalNumbers: true, }, });


// var connection = mysql.createConnection({
//   host     : 'localhost',
//   port     : '3306',
//   user     : 'root',
//   password : 'root123',
//   database : 'ecommerce_db' 
module.exports = sequelize;
