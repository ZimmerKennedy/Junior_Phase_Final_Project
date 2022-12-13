const router = require('express').Router()

router.use('/campus', require('./campuses'))
router.use('/students', require('./students'))

module.exports = router
