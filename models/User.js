const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    fname:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    lname:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    email:{
        type:Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },

    password:{
        type:Sequelize.STRING(255),
        allowNull: false
    },

    position:{
        type:Sequelize.STRING(255),
        allowNull: true
    },

    user_level:{
        type:Sequelize.STRING(255),
        allowNull: false
    }

})

module.exports = User;