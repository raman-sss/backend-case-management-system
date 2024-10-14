const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const Financialinfo = sequelize.define(
  "financialinfo",

  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    feee: {
        type: DataTypes.INTEGER,
    },
    retainer: {
        type: DataTypes.STRING,
    },
    caseId: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
  },
  { timestamp: false }
);

Model.exports = Financialinfo;
