const express = require('express')
const router = express.Router()
const routes = require('../controllers/routes')

router.get('/', routes.list)
router.get('/:routeId', routes.show)
router.get('/OnlineBuses/:routeId', routes.listOnlineBuses)
router.post('/', routes.create)
router.patch('/:routeId', routes.update)
router.delete('/:routeId', routes.delete)

module.exports = router
