const User = require('../models').User
const httpStatus = require('http-status')
const sequelize = require('sequelize')
const { getToken } = require('../services').users
const { last, first } = require('lodash')


const signUp = (req, res) => {
  const { userName, password } = req.body
  return User
    .create({ userName, password })
    .then(user => res.status(httpStatus.CREATED).send(user))
    .catch(sequelize.UniqueConstraintError, error => res.status(httpStatus.CONFLICT).send(error))
    .catch(error => res.status(httpStatus.BAD_REQUEST).send(error))
}


module.exports = {
  signUp
}