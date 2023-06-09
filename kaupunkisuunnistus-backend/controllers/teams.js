/**
 * Main author: Jussi Kukkonen
 * Delete all-method: Julia Juntunen
 */
const teamsRouter = require("express").Router();
const Team = require("../models/team");

teamsRouter.get("/", async (request, response) => {
  const teams = await Team.find({});

  console.log("List of teams: ", teams);
  response.json(teams);
});

teamsRouter.get("/:id", async (request, response) => {
  const team = await Team.findById(request.params.id);

  if (team) {
    console.log(team);
    response.json(team);
  } else {
    response.status(201).json(savedTeam);
  }
});

teamsRouter.post("/", async (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "team name missing" });
  }

  const team = new Team({
    name: body.name,
    score: body.score || 0
  });

  const savedTeam = await team.save();
  response.json(savedTeam);
});

teamsRouter.delete("/:id", async (request, response) => {
  await Team.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

teamsRouter.delete("/", async (request, response) => {
  await Team.deleteMany({})
  response.status(200).end()
})

teamsRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const team = {
    name: body.name,
    score: body.score,
  }

  Team.findByIdAndUpdate(request.params.id, team, { new: true })
    .then((updatedTeam) => {
      response.json(updatedTeam);
    })
    .catch((error) => next(error));
});

module.exports = teamsRouter;
