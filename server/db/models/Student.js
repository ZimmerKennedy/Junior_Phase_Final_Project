const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const Student = db.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        unique: true,
    },
    imageUrl: {
        type: DataTypes.TEXT,
        defaultValue:
            'https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_960_720.jpg',
    },
    gpa: {
        type: DataTypes.TEXT,
    },
})

module.exports = Student