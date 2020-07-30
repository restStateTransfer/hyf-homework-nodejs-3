const express = require('express')
const app = express()

let Users = []

app.get('/', (req, res)=> {
  res.json('Hello World!')
})

app.post('/user', (req,res)=>{
  res.status(200).json({id:0})
  Users.push({id:0})
})

app.get('/users', (req,res)=> {
  res.json(Users)
})

app.get('/user/:id', (req,res)=>{
  res.json({id: 0})
})

app.delete('/user/:id', (req,res)=> {
  if (req.params.id == Object.keys(Users)){
    res.status(202).send()
    Users = [];
  } else {
    res.status(204).send()
  }
})

app.listen(3000, ()=> console.log('Server is running on 3000'))
