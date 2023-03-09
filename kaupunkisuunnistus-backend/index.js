const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const Team = require('./models/team')
const Location = require('./models/location')

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
}

const unknownEndpoint = (request, response) => {
  console.log('unknown endpoint')
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use(morgan('tiny'))

/*
let teams = [
  {
    team_id: 1,
    name: "Oonafanit",
    score: 5,
  },
  {
    team_id: 2,
    name: "Lampaat",
    score: 12,
  },
  {
    team_id: 3,
    name: "Team fuksit",
    score: 3,
  },
];

let locations = [
  {
    location_id: 1,
    name: "Tiedepuiston kenttä",
  },
  {
    location_id: 2,
    name: "Torisusi",
  },
  {
    location_id: 3,
    name: "Suvantosilta",
  },
  {
    location_id: 4,
    name: "Kirkkopuisto",
  },
  {
    location_id: 5,
    name: "Carelian etupiha",
  },
];
*/

app.get("/", (request, response) => {
  console.log(`Haloust heloust`)
  response.send("<h1>Haloust heloust!</h1>");
});

// Joukkueet (teams)
app.get("/api/teams", (request, response) => {
  Team.find({}).then(teams => {
    console.log(`List of teams: `, teams)
    response.json(teams);
  })
});

app.get("/api/teams/:id", (request, response) => {
  const id = Number(request.params.id);
  const team = teams.find((team) => team.team_id === id);

  if (team) {
    console.log(`Details of team ${id}: `, team)
    response.json(team);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/teams/:id", (request, response) => {
  const id = Number(request.params.id);
  teams = teams.filter((team) => team.team_id !== id);

  response.status(204).end();
});

app.post("/api/teams", (request, response) => {
  const maxId = teams.length > 0 ? Math.max(...teams.map((t) => t.team_id)) : 0;

  const team = request.body;
  team.team_id = maxId + 1;

  teams = teams.concat(team);
  console.log(`Added team: `, team)

  response.json(team);
});

// Rastipaikat (location)
app.get("/api/locations", (request, response) => {
  Location.find({}).then(locations => {
    console.log(`List of locations: `, locations)
    response.json(locations);
  })
});

app.get("/api/locations/:id", (request, response) => {
  const id = Number(request.params.id);
  const location = locations.find((l) => l.location_id === id);

  if (location) {
    console.log(`Details of location ${id}: `, location)
    response.json(location);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/locations/:id", (request, response) => {
  const id = Number(request.params.id);
  locations = locations.filter((l) => l.location_id !== id);

  response.status(204).end();
});

app.post("/api/locations", (request, response) => {
  const maxId =
    locations.length > 0 ? Math.max(...locations.map((l) => l.location_id)) : 0;

  const location = request.body;
  location.location_id = maxId + 1;

  locations = locations.concat(location);
  console.log(`Added location: `, location)

  response.json(location);
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});