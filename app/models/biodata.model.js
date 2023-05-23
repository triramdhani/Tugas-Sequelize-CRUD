// const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Biodata = sequelize.define("biodata", {
      nama: {
        type: Sequelize.STRING
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATEONLY
      },
      Alamat : {
        type: Sequelize.STRING
      }
    });
  
    return Biodata;
  };
