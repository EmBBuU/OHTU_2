const teamsRouter = require('express').Router()
const Team = require('../models/team')

teamsRouter.get('/', async (request, response) => {
  const teams = await Team.find({})
  
  console.log('List of teams: ', teams)
  response.json(teams);
})

teamsRouter.get('/:id', async (request, response) => {
  const team = await Team.findById(request.params.id)
  
  if (team) {
    console.log(team)
    response.json(team)
  }
  else {
    response.status(201).json(savedTeam)
  }
})

teamsRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'team name missing' })
  }

  const team = new Team({
    // team_id automatisoitu incrementti tähän?
    name: body.name,
    score: body.score || 0
  })

  const savedTeam = await team.save()
  response.json(savedTeam)
});

teamsRouter.delete("/:id", async (request, response) => {
  await Team.findByIdAndRemove(request.params.id)
  response.status(204).end()
});

// Ei testattu, 
teamsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const team = new Team({
    // team_id pitää tälle tehdä jotain?
    name: body.name,
    score: body.score,
  })

  Team.findByIdAndUpdate(request.params.id, team, { new: true })
    .then(updatedTeam => {
      response.json(updatedTeam)
    })
    .catch(error => next(error))
})

module.exports = teamsRouter