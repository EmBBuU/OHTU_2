const locationsRouter = require('express').Router()
const Location = require('../models/location')

locationsRouter.get('/', (request, response) => {
  Location.find({}).then(locations => {
    console.log('List of locations: ', locations)
    response.json(locations)
  })
});

locationsRouter.get('/:id', (request, response, next) => {
  Location.findById(request.params.id)
    .then(location => {
      if (location) {
        console.log(location)
        response.json(location)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
});

locationsRouter.post('/', (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'location name missing' })
  }

  const location = new Location({
    // location_id automatisoitu incrementti tähän?
    name: body.name
  })

  location.save()
    .then(savedLocation => {
      response.json(savedLocation)
    })
    .catch(error => next(error))
});

locationsRouter.delete('/:id', (request, response, next) => {
  Location.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
});

// Ei testattu
locationsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const location = {
    name: body.name
  }

  Location.findByIdAndUpdate(request.params.id, location, { new: true })
    .then(updatedLocation => {
      response.json(updatedLocation)
    })
    .catch(error => next(error))
})


module.exports = locationsRouter