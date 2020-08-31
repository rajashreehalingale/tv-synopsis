const express = require('Express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  return res.render('index', { showdata })
})

app.get('/episodes/:number', (req, res) => {
  const foundseason = showdata.seasons.find((season) => {
    return season.number === parseInt(req.params.number)
  })

  return res.render('episodes', { season: foundseason, 'title': showdata.title })
})

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(1337, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 1337...')
})
