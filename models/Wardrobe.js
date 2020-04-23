const Sequelize = require('sequelize');
const db = require('../config/db');

const Wardrobe = db.define('wardrobe', {

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

    w_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    }
},
{
    freezeTableName: true,
})

module.exports = Wardrobe;