const { DataTypes } = require("sequelize");
const { sequelize } = require('.')

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allownNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        descriotion: {
            type: DataTypes.TEXT
        },
        published:{
            type: DataTypes.BOOLEAN
        }
    })

    return Product

}