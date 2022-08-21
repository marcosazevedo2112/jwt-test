const express = require('express')
const AuthUtils = require('./src/authUtils')
require('dotenv-safe').config()
const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Auth = require('./src/auth')
app.use('/auth', Auth)

const UsuarioRouter = require('./src/UsuarioRouter')
const authUtils = require('./src/authUtils')
app.use('/usuarios', authUtils.verifyJWT, UsuarioRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

