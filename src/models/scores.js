const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections.js');

class Score extends Model{}

Score.init (
    {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'user_id',
            },
          },
          category:
          {
            type: DataTypes.STRING,
            allowNull: false,
          },
          score: {
            type: DataTypes.INTEGER,
            allowNull: true,
          }
          //update Date & Time
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'scores',
    }
);

module.exports = Score;