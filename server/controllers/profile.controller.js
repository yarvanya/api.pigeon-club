'use strict';

const { Profile } = require('../../config/db');
const { messages } = require('./../helper');

module.exports = {
  create(req, res) {
    const assignProfile = Object.assign({}, req.body);
    Profile.create(assignProfile)
      .then(profile => res.status(201).json({
        'profile': profile,
        'message': messages.createdProfile
      }))
      .catch(error => res.status(400).json({
        'error': error,
        'message': messages.profileIsNotCreated
      }));
  },

  retrieve(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
      !!profile && res.status(200).send(profile) ||
      res.status(404).json({
        'message': messages.profileError
      });
    })
    .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
      profile || res.status(404).json({
        'message': messages.profileError
      });
      profile.updateAttributes(Object.assign({}, req.body))
      .then(profile => res.status(200).json({
        'profile': profile,
        'message': messages.profileUpdate
      }))
      .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
  }

};
