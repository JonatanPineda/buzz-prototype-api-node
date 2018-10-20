const mongoose = require('mongoose')
const Route = require('../models/route')

exports.list = (req, res) => 
  Route
    .find()
    .select('_id name coordinates strokeColor')
    .populate('stops')
    .populate('buses')
    .exec()
    .then(response => res.status(200).json(response))

exports.listOnlineBuses = (req, res) => 
  Route
    .findById(req.params.routeId)
    .select('buses')
    .populate({
      path: 'buses',
      match: { online: { $gte: true } },
      select: 'lat lon'
    })
    .exec()
    .then(result => res.status(200).json(result.buses))

exports.show = (req, res) => 
  Route
    .findById(req.params.routeId)
    .exec()
    .then(route => res.status(200).json(route))

exports.create = (req, res) => 
  Route
    .create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      coordinates: req.body.coordinates,
      strokeColor: req.body.strokeColor,
    })
    .then(result =>
      res.status(200).json({
        _id: result._id,
        name: result.name,
        coordinates: req.body.coordinates,
        strokeColor: req.body.strokeColor
      })
    )

exports.update = (req, res) =>
  Route
    .updateOne({ _id: req.params.routeId }, req.body)
    .exec()
    .then(result => res.status(200).json({ message: 'Route updated fulfilled '}))

exports.delete = (req, res) => 
  Route
    .deleteOne({ _id: req.params.routeId })
    .exec()
    .then(result => res.status(200).json({ message: 'Route removed fulfilled' }))
