const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnection");

const CaseInfo = sequelize.define(
    "caseInfo",

    {
        caseId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        plaintiffId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defendantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        witnessId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        legalrepId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        priority: {
            type: DataTypes.STRING,
        },
        dateOpened: {
            type: DataTypes.DATE,
        },
        dateClosed:{
            type: DataTypes.DATE,
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

module.exports = CaseInfo;
