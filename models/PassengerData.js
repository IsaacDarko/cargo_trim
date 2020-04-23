const Sequelize = require('sequelize');
const db = require('../config/db');

const PassengerData = db.define('passenger_data', {

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

    compt1:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt2:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt3:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt4:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt5:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt6:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    compt7:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: false
    },

    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
       default: new Date()
    },

    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: new Date()
    }

},
{
    freezeTableName: true,
})

module.exports = PassengerData;