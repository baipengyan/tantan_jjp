const express = require('express')
const router = express.Router()

let loginRouter = require('./loginRouter')

router.use('/login', loginRouter)

module.exports = router