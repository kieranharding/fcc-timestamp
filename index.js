// Challenge at https://www.freecodecamp.com/challenges/timestamp-microservice
// Deployed at https://kah-fcc-timestamp.herokuapp.com/

const http = require('http')
const url = require('url')
const strftime = require('strftime')

function get_unix (stamp) {
  return 1 * stamp || Date.parse(stamp.replace(new RegExp('%20', 'g'), ' ')) / 1000 || null
}

function get_natural (stamp) {
  const date = 1000 * stamp
    ? new Date(1000 * stamp)
    : new Date(stamp.replace(new RegExp('%20', 'g'), ' '))
  if (date.toString() === 'Invalid Date') {
    return null
  } else {
    return strftime('%B %d, %Y', date)
  } 
}

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname.slice(1)
  const result = {
    'unix': get_unix(path),
    'natural': get_natural(path)
  }

  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(result))
})

server.listen(process.env.PORT || 5000)

module.exports = {
  get_unix: get_unix,
  get_natural: get_natural
}