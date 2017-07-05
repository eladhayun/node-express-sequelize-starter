const usersController = require('../controllers').users

module.exports = (app) => {

  app.post('/api/sign-up', usersController.signUp)
}