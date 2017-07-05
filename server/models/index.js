const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const constants = require('../consts')
const basename = path.basename(module.filename)
const db = {}
const { dbConfig } = require('../utils/configurator')
const { database, username, password } = dbConfig

let sequelize = new Sequelize(
  database, username, password, dbConfig
)

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
    model.sync()
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db