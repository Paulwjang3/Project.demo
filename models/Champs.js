const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Champs extends Model {};

Champs.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }

    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, 
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Champs'
}
);

module.exports = Champs