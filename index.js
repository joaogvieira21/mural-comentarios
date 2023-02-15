const PORT = 3050
const express = require('express')
const apiRoute = require('./routes/api')
const path = require('path')
const app = express()

app.use('/api', apiRoute)
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

