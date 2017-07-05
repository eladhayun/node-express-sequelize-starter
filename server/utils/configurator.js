const CONSTANTS = require('../consts')
const appConfig = require('../config/config.json')
const dbConfig = require('../config/db.json')
const env = process.env.NODE_ENV === CONSTANTS.PRODUCTION ? CONSTANTS.PRODUCTION : CONSTANTS.DEVELOPMENT

module.exports = {
  appConfig: appConfig[env],
  dbConfig: dbConfig[env]
}