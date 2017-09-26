'use strict';

module.exports = {
  beforeCreate: model => {
    model.createdAt = new Date().getTime();
    model.updatedAt = new Date().getTime();
  },
  beforeUpdate: model => {
    model.updatedAt = new Date().getTime();
  }
};
