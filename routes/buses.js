const express = require('express')
const router = express.Router()
const buses = require('../controllers/buses')

router.get('/', buses.list)
router.get('/:busId', buses.show)
router.get('/code/:code', buses.showBusByCode)
router.post('/', buses.create)
router.patch('/:busId', buses.update)
router.delete('/:busId', buses.delete)

module.exports = router
