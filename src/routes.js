const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.get('/users',UserController.list)
routes.get('/users/:id',UserController.show)    
routes.post('/users',UserController.create)
routes.put('/users/:id',UserController.update)
routes.delete('/users/:id',UserController.delete)

module.exports = routes;


// routes.get('/users',(req,res)=>{

//     const params = req.query;
//     console.log(params)
//     res.json(params)
// })

// routes.post('/users/:id',(req,res)=>{

//     const params = req.params;
//     console.log(params)
//     res.json(params)
// })

