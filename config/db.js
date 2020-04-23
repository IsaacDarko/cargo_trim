const Sequelize = require('sequelize');
const config = require('config');

module.exports = new Sequelize( 'passion_calc_db', 'root', '', config.get('sqlConnect'));