
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-extra.cjs.production.min.js')
} else {
  module.exports = require('./sdk-extra.cjs.development.js')
}
