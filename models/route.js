const mongoose = require('mongoose')
const Schema = mongoose.Schema

const routeSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  coordinates: [{
    lat: Number,
    lon: Number,
    _id: false
  }],
  strokeColor: String,
  buses: [{ type: Schema.Types.ObjectId, ref: 'Bus' }],
  stops: [{ type: Schema.Types.ObjectId, ref: 'Stop' }]
})

module.exports = mongoose.model('Route', routeSchema)
