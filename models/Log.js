const Sequelize = require('sequelize');
const db = require('../config/db');

const Log = db.define('log_history', {

    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },

    sno:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    owe_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    owe_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    observer_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    observer_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    wardrobe_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    wardrobe_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt1_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt1_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt2_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt2_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt3_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt3_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt4_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt4_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt5_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt5_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt6_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt6_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    pax_compt7_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    pax_compt7_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    bags_compt_fwd_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    bags_compt_fwd_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    bags_compt_aft1_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    bags_compt_aft1_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    bags_compt_aft2_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    bags_compt_aft2_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    zfweight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    zfindex:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    fuelonboard_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    fuelonboard_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    ramp_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    ramp_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    taxifuel_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    taxifuel_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    takeoff_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    takeoff_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    estfuelused_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    estfuelused_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    landing_weight:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    landing_index:{
        type:Sequelize.FLOAT(10, 1),
        allowNull: true
    },

    totalpax:{
        type:Sequelize.INTEGER,
        allowNull: false
    },


},
{
    freezeTableName: true,
})

module.exports = Log;