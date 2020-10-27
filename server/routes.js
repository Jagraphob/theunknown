const router = require('express').Router()
const testCtrl = require('./controllers/tests.controller')
const userCtrl = require('./controllers/users.controller')

router.get('/test', testCtrl.get)
router.get('/test2', testCtrl.get2)
router.get('/users', userCtrl.get)

module.exports = router
