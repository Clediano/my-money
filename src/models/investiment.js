'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investiment = sequelize.define('Investiment', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Investiment.associate = function(models) {
    this.belongsTo(models.Broker);
    this.hasMany(models.Transaction);
    this.hasMany(models.BalanceUpdate);
  };
  return Investiment;
};