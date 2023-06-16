require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const smartphoneRoutes = require("./routes/smartphones")

// express app
const app = express()

// middleware
app.use(express.json()) // Gets json data in req.body

app.use((req, res, next) => {
    console.log(req.path)
    next()
})

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => { // Proccess.env.PORT = 4000 using dotenv
            console.log('Connected to the database & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// routes
app.use('/api/phones', smartphoneRoutes) // Use instead Get, Post etc. Uses routes from smartphones.js
