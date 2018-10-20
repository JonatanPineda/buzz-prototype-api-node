const mongoose = require('mongoose')
const Stop = require('../models/stop')

exports.list = (req, res) =>
  Stop
    .find()
    .select('_id lat lon name')
    .exec()
    .then(response => res.status(200).json(response))

exports.show = (req, res) =>
  Stop
    .findById(req.params.stopId)
    .exec()
    .then(stop => res.status(200).json(stop))

exports.create = (req, res) =>
  Stop
    .create({
      _id: new mongoose.Types.ObjectId(),
      lat: req.body.lat,
      lon: req.body.lon,
      name: req.body.name
    })
    .then(result =>
      res.status(200).json(result)
    )

exports.update = (req, res) => 
  Stop
    .updateOne({_id: req.params.stopId }, req.body )
    .exec()
    .then(result =>
      res.status(200).json({ message: 'Stop updated fulfilled '})
    )

exports.delete = (req, res) =>
  Stop
    .deleteOne({ _id: req.params.stopId })
    .exec()
    .then(result => 
      res.status(200).json({ message: 'Stop removed fulfilled' })
    )
