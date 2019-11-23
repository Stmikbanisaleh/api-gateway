const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msrev = sequelize.define("msrev", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_rev: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    keterangan: {
		type: Sequelize.TEXT
    },
    golongan : {
		type: Sequelize.INTEGER
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}  ,
    {
        freezeTableName: true,
    });

// force: true will drop the table if it already exists
msrev.sync({ force: false }).then(() => {
    // Table created
    // return mspaten.create({
    //     name: 'admin',
    //     password: 'admin',
    //     email : 'imamsatrianta@gmail.com'
    // });
});
module.exports = msrev;

