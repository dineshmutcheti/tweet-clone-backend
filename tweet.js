const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Tweet = sequelize.define('Tweet', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Tweet;
