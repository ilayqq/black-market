const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const deviceRouter = require('./deviceRouter.js')

router.use('/user', userRouter)
router.use('/device', deviceRouter)

module.exports = router