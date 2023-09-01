const express = require('express')
const router = express.Router()

const AuthController = require('../login/AuthController')

router.post('/register', AuthController.register)

module.exports = router