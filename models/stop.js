const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stopSchema = Schema({
  _id: Schema.Types.ObjectId,
  lat: Number,
  lon: Number,
  name: String,
  //  after: [Number],
  //index: Number
})

module.exports = mongoose.model('Stop', stopSchema)
