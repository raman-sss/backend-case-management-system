const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");
const Courts = require("./courts");

const Documents = sequelize.define(
  "documents",

  {
    documentsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
    },
    caseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    attachment: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    courtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

module.exports = Courts;