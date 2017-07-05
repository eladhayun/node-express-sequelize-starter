const fs = require('fs')

const error404 = (req, res) => {
  if (req.accepts('html')) {
    // Respond with html page
    fs.readFile(__dirname + '/../../public/404/index.html', 'utf-8', (err, page) => {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.write(page)
      res.end()
    })
  }
  else if (req.accepts('json')) {
    // Respond with json
    res.status(404).send({ error: 'Not found' })
  }
  else {
    // Default to plain-text
    res.status(404).type('txt').send('Not found')
  }
}

module.exports = {
  error404
}