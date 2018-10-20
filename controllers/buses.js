const mongoose = require('mongoose')
const Bus = require('../models/bus')

exports.list = (req, res) =>
  Bus
    .find()
    .select('_id lat lon code active online')
    .exec()
    .then(response => res.status(200).json(response))

exports.show = (req, res) =>
  Bus
    .findById(req.params.busId)
    .exec()
    .then(bus => res.status(200).json(bus))

exports.showBusByCode = (req, res) => 
  Bus
    .findOne({ code: req.params.code, active: true })
    .select('code _id')
    .exec()
    .then(bus => res.status(200).json(bus))

exports.create = (req, res) =>
  Bus
    .create({
      _id: new mongoose.Types.ObjectId(),
      lat: req.body.lat,
      lon: req.body.lon,
      code: req.body.code,
      active: true,
      online: false
    })
    .then(result => {
      res.status(200).json({
          _id: result._id,
          lat: result.lat,
          lon: result.lon,
          code: result.code,
          active: result.active,
          online: result.online
        })
    })


exports.update = (req, res) =>
  Bus
    .updateOne({_id: req.params.busId}, req.body)
    .exec()
    .then(result => res.status(200).json({
        message: 'Bus updated fulfilled'
      })
    )

exports.delete = (req, res) =>
  Bus
    .deleteOne({ _id: req.params.busId })
    .exec()
    .then(result => res.status(200).json({ message: 'Bus removed fulfilled'}))
