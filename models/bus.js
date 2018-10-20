const mongoose = require('mongoose')
const Schema = mongoose.Schema

const busSchema = Schema({
  _id: Schema.Types.ObjectId,
  lat: Number,
  lon: Number,
  code: String,
  active: Boolean,
  online: Boolean
})

module.exports = mongoose.model('Bus', busSchema)
