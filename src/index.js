const express = require('express')
const app = express()

const Users = []

app.get('/', (req, res)=> {
  res.json('Hello World!')
})

app.get('/users', (req,res)=> {
  res.json(Users)
})

app.listen(3000, ()=> console.log('Server is running on 3000'))
