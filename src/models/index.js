const User = require('./users');
const Score = require('./scores');

User.hasOne(Score, {
    foreignKey: 'user_id',
  });

Score.belongsTo(User,{
  foreignKey: 'user_id',
});

module.exports = { User, Score };