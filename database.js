const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('twitter_clone', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
