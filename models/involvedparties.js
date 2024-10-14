const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const Involvedparties = sequelize.define(
    "involvedparties",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        mobileNumber: {
            type: DataTypes.INTEGER,
        },
        email: {
            type: DataTypes.STRING,
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
    { timestamps: false }
);

module.exports = Involvedparties;