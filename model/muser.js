const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msuser = sequelize.define("msuser", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        email: true
    },
    image: {
        type: Sequelize.BLOB('long'),
        allowNull: true,
    },
    image_size: {
        type: Sequelize.INTEGER
    },
    image_type: {
        type: Sequelize.STRING
    },
    image_name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false,
        unique: true
    },
    role_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    is_active: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}  ,
    {
        freezeTableName: true,
    });

// force: true will drop the table if it already exists
msuser.sync({ force: false }).then(() => {
});
module.exports = msuser;

