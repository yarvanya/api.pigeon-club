'use strict';

const { hooks } = require('./../helper');

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(200000),
      allowNull: true
    },
    birthDate: {
      type: DataTypes.DATEONLY
    },
    address: {
      type: DataTypes.STRING(255)
    },
    city: {
      type: DataTypes.STRING(100)
    },
    country: {
      type: DataTypes.STRING(100)
    },
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false,
    hooks: {
      beforeCreate: hooks.beforeCreate,
      beforeUpdate: hooks.beforeUpdate
    }
  });
  return Profile;
};
