const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the Octy GitHub Explorer server')
})

app.listen(8081, () => {
    console.log('The server is running')
})