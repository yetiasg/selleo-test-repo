import express from 'express'

const app = express()
app.use(express.json())

app.listen(3005, () => console.log('Listening on port 3005'))