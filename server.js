const express = require('express')
const Gun = require('gun')
const PORT = process.env.PORT || 4000
const cors = require('cors')

const app = express()
const port = process.env.PORT || 9000

app.use(cors())

app.use(Gun.serve)

app.get('/', (_, res) => {
  res.status(200).send('> DEBUG: Open Chat Node is Live')
})

const server = app.listen(port, () => {
  console.log(`> DEBUG: Open Chat Node is listening at http://localhost:${port}`)
})

Gun({ web: server })