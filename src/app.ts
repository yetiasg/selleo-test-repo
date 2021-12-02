import express from 'express'

const app = express()
app.use(express.json())

app.listen(3004, () => console.log('Listening on port 3004'))