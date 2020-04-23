const Sequelize = require('sequelize');
const db = require('../config/db');

const Pax7 = db.define('pax_compt7', {

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    numberofpax:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },


},
{
    freezeTableName: true,
})

module.exports = Pax7;