const teamsRouter = require('express').Router()
const Team = require('../models/team')

teamsRouter.get('/', (request, response) => {
  Team.find({}).then(teams => {
    console.log('List of teams: ', teams)
    response.json(teams);
  })
});

teamsRouter.get('/:id', (request, response, next) => {
  Team.findById(request.params.id)
    .then(team => {
      if (team) {
        console.log(team)
        response.json(team)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

teamsRouter.post('/', (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'team name missing' })
  }

  const team = new Team({
    // team_id automatisoitu incrementti tähän?
    name: body.name,
    score: body.score || 0
  })

  team.save()
    .then(savedTeam => {
      response.json(savedTeam)
    })
    .catch(error => next(error))
});


teamsRouter.delete("/:id", (request, response, next) => {
  Team.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
});

// Ei testattu
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