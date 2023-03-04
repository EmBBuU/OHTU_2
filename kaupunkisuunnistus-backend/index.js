require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let teams = [
  {
    id: 1,
    name: "Oonafanit",
    score: 5
  },
  {
    id: 2,
    name: "Lampaat",
    score: 12
  },
  {
    id: 3,
    name: "Team fuksit",
    score: 3
  },
  
]

let locations = [
  {
    id: 1,
    name: "Tiedepuiston kenttä"
  },
  {
    id: 2,
    name: "Torisusi"
  },
  {
    id: 3,
    name: "Suvantosilta"
  },
  {
    id: 4,
    name: "Kirkkopuisto"
  },
  {
    id: 5,
    name: "Carelian etupiha"
  }

]

app.get('/', (request, response) => {
  response.send('<h1>Haloust heloust!</h1>')
})

// Joukkueet (teams)
app.get('/api/teams', (request, response) => {
  response.json(teams)
})

app.get('/api/teams/:id', (request, response) => {
  const id = Number(request.params.id)
  const team = teams.find(team => team.id === id)

  if (team) {
    response.json(team)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/teams/:id', (request, response) => {
  const id = Number(request.params.id)
  teams = teams.filter(team => team.id !== id)

  response.status(204).end()
})

app.post('/api/teams', (request, response) => {
  const maxId = teams.length > 0
    ? Math.max(...teams.map(t => t.id)) 
    : 0

  const team = request.body
  team.id = maxId + 1

  teams = teams.concat(team)

  response.json(team)
})


// Rastipaikat (location)
app.get('/api/locations', (request, response) => {
  response.json(locations)
})

app.get('/api/locations/:id', (request, response) => {
  const id = Number(request.params.id)
  const location = locations.find(location => location.id === id)

  if (location) {
    response.json(location)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/locations/:id', (request, response) => {
  const id = Number(request.params.id)
  locations = locations.filter(location => location.id !== id)

  response.status(204).end()
})

app.post('/api/locations', (request, response) => {
  const maxId = locations.length > 0
    ? Math.max(...locations.map(l => l.id)) 
    : 0

  const location = request.body
  location.id = maxId + 1

  locations = locations.concat(location)

  response.json(location)
})




const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)