// Challenge at https://www.freecodecamp.com/challenges/timestamp-microservice
// Deployed at https://kah-fcc-timestamp.herokuapp.com/

const http = require('http')
const url = require('url')
const strftime = require('strftime')

function get_unix (stamp) {
  return 1 * stamp || Date.parse(stamp.replace(new RegExp('%20', 'g'), ' ')) / 1000 || null
}

function get_natural (num) {
  // If not a parsable date, return null
  // Otherwise, format and return
}

module.exports = {
  get_unix: get_unix,
  get_natural: get_natural
}