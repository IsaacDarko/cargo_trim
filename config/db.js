const Sequelize = require('sequelize');
const config = require('config');

module.exports = new Sequelize( 'passion_cargo_trim', 'root', '', config.get('sqlConnect'));