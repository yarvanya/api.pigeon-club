const { userController } = require('../controllers');
const { profileController } = require('../controllers');

module.exports = app => {
  app.post('/api/users', userController.create);
  app.delete('/api/user/:id', userController.destroy);

  app.post('/api/profiles', profileController.create);
  app.get('/api/profile/:id', profileController.retrieve);
  app.put('/api/profile/:id', profileController.update);
};
