const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('db is working'))
    .catch((error) => console.log(error.message))
    

const server = app.listen(process.env.PORT, () => {
    console.log(`server has started on port ${process.env.PORT}`);
})