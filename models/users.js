const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const Users = sequelize.define(
  "users",

  {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.CHAR,
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    mobileNumber: {
        type: DataTypes.INTEGER,
    },
    role: {
        type: DataTypes.STRING,
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

module.exports = Users;