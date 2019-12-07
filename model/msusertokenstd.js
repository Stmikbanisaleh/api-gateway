const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msusertokenstd = sequelize.define('msusertokenstd', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
  },
  token: {
    type: Sequelize.STRING,
  },
  date_created: {
    type: Sequelize.INTEGER,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
msusertokenstd.sync({ force: false }).then(() => {
//     // Table created
//     return msuser.create({
//         name: 'admin',
//         password: 'admin',
//         email : 'imamsatrianta@gmail.com'
//     });
});
module.exports = msusertokenstd;
