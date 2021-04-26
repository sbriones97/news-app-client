const express = require('express')
cont path = require('path')

const app = express()

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'dist', 'practicaAngular')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'practicaAngular', 'index.html'))
})

app.listen(port, () => {
    console.log('app is running on port', port)
})