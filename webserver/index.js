const express = require('express')
const countries = require('../node_modules/country-json/src/country-by-population.json')
const cors = require('cors')

const app = express()
const port = 3000
const delay = 1500

app.use(cors())

app.get('/countries', (req, res) => {
  // res.send('Hello World!')
  res.json(countries)
})

app.get('/countries/:name', (req, res) => {
  const countryName = req.params.name
  const country = countries.find(country => country.country.toLowerCase() === countryName.toLowerCase())
  setTimeout(() => res.json(country), delay)
})

app.listen(port, () => console.log(`Test server running on port ${port}!`))
