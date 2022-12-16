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
        // allowNull: false,
        // validate: {
        //     isEmail: true,
        // },
        unique: true,
        // might be broken check again for future ||
        // Come Back here to fix email validation future
        // validate: {
        //     isEmail: {
        //         msg: 'Must be a valid email address'
        //     }
        // }
        // https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_960_720.jpg
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