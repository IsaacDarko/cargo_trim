const Sequelize = require('sequelize');
const db = require('../config/db');

const Observer = db.define('observer', {

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

    o_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },


},
{
    freezeTableName: true,
})

module.exports = Observer;