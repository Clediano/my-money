'use strict';
module.exports = (sequelize, DataTypes) => {
  const BalanceUpdate = sequelize.define('BalanceUpdate', {
    amount: DataTypes.DECIMAL,
    date: DataTypes.DATEONLY
  }, {});
  BalanceUpdate.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.Investiment);
  };
  return BalanceUpdate;
};