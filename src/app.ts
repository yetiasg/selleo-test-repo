import express from 'express'

const app = express()
app.use(express.json())

//some changes
//another changes
//another changes1


app.listen(3005, () => console.log('Listening on port 3005'))