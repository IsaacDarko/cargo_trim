const Sequelize = require('sequelize');
const db = require('../config/db');

const Bagg1 = db.define('bag_comp_aft1', {

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    weight:{
        type:Sequelize.INTEGER(100000),
        allowNull: false
    },

    comp_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },


},
{
    freezeTableName: true,
})

module.exports = Bagg1;