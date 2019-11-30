const Sequelize = require('sequelize');
const sequelize = require('../lib/connection');

const msuserstandar = sequelize.define('msuserstandar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  no_ktp: {
    type: Sequelize.INTEGER,
  },
  nama_lengkap: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    email: true,
  },
  role_id: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.BLOB('long'),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  no_handphone: {
    type: Sequelize.STRING,
  },
  fax: {
    type: Sequelize.STRING,
  },
  stakeholder: {
    type: Sequelize.STRING,
  },
  alamat: {
    type: Sequelize.STRING,
  },
  id_provinsi: {
    type: Sequelize.STRING,
  },
  id_kota: {
    type: Sequelize.STRING,
  },
  is_active: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  freezeTableName: true,
});

// force: true will drop the table if it already exists
msuserstandar.sync({ force: false }).then(() => {
//     // Table created
//     return msuser.create({
//         name: 'admin',
//         password: 'admin',
//         email : 'imamsatrianta@gmail.com'
//     });
});
module.exports = msuserstandar;
