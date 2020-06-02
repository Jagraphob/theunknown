let router = require('express').Router()
let testCtrl = require('./controllers/tests.controller')

router.get('/test', testCtrl.get)
router.get('/test2', testCtrl.get2)

module.exports = router
