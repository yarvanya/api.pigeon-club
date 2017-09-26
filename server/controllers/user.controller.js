'use strict';

const passwordHash = require('password-hash');
const { User } = require('../../config/db');
const { messages } = require('./../helper');

const patterns = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,20}$/
};

const hasPassword = assignUser => {
  if (assignUser.password) {
    if (!assignUser.password.match(patterns.password)) {
      return false;
    }
    assignUser.password = passwordHash.generate(assignUser.password);
  };
  return true;
};

module.exports = {
  create(req, res) {
    const assignUser = Object.assign({}, req.body/*, {owner: req.decoded.id}*/);

    (!hasPassword(assignUser)) && res.status(400).json({
      'message': messages.invalidPassword
    });

    User.create(assignUser)
      .then(user => res.status(201).json({
        'user': user,
        'message': messages.createdUser
      }))
      .catch(error => res.status(400).json({
        'error': error,
        'message': messages.userIsNotCreated
      }));
  },

  destroy(req, res) {
    User.findById(req.params.id)
    .then(user => {
      user.destroy()
      .then(user => res.status(200).json({
        'message': messages.userDeleted
      }))
      .catch(error => res.status(400).json({
        'error': error,
        'message': messages.userNotDeleted
      }));
    })
    .catch(error => res.status(404).json({
      'message': messages.userNotFound
    }));
  }

};
