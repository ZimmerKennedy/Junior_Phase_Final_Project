const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const Campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    imageUrl: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true,
        },
        defaultValue:
            'https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400312_960_720.jpg',
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        },

    },
})

module.exports = Campus