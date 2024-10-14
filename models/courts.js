const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const Courts = sequelize.define(
  "courts",

  {
    courtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    location: {
        type: DataTypes.STRING,
    },
    hearingDates: {
        type: DataTypes.DATE,
    },
    caseId: {
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