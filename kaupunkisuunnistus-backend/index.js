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

app.get('/', (request, response) => {
  response.send('<h1>Haloust heloust!</h1>')
})

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