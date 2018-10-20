const express = require('express')
const router = express.Router()
const stops = require('../controllers/stops')

router.get('/', stops.list)
router.get('/:stopId', stops.show)
router.post('/', stops.create)
router.patch('/:stopId', stops.update)
router.delete('/:stopId', stops.delete)

module.exports = router
