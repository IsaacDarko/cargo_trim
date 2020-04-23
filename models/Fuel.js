const Sequelize = require('sequelize');
const db = require('../config/db');

const Fuel = db.define('fuel', {

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    f_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },


},
{
    freezeTableName: true,
})

module.exports = Fuel;