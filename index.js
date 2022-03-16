const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

const fortunes = require('./fortunes')
const fortune = () => fortunes[parseInt(Math.random()*fortunes.length)]

app.get('/', (req, res) => {
  fs.readFile('template/index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500)
      res.send('oops')
    } else {
      res.status(200)
      res.send(data.replace(/{{ title }}/, fortune()))
    }
  })
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`🥠🔮 O! Fortuna! is up and spinning on *:${port}`)
})
