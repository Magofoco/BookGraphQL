const express = require('express')
const graphqlHTTP = require("express-graphql")
const schema = require('./schema/schema')
const mongoose =  require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
mongoose.connect('PLACE_HERE_YOUR_MONGO_DB', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connection.once('open', () =>{
  console.log("Connected to DB")
})

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () =>{
  console.log("Listening on port 4000")
})