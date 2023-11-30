require('dotenv').config()
require('./Database/connection')

const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)
server.use('/Uploads',express.static("./Uploads"))


const PORT = 4000 || process.env.PORT





server.listen(PORT, () => { console.log('Server Running At PORT', PORT) })