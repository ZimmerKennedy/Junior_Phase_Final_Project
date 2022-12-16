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
            'https://www.shutterstock.com/image-photo/urbana-illinois-april-17-2016-600w-1037739901.jpg',
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