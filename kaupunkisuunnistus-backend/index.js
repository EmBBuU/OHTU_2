const express = require('express')
const app = express()

let teams = [
  {
    id: 1,
    name: "Oonafanit",
    points: 5
  },
  {
    id: 2,
    name: "Lampaat",
    points: 12
  },
  {
    id: 3,
    name: "Team fuksit",
    points: 7
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


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)