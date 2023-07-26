const express = require('express');
const mongoose = require("mongoose");
const user = require('../models/usermodel');
const router = express.Router();

// router API
router.post("/",async(req,res)=>{
    const {name,email,age} = req.body;
    
    try{
      const userAdded = await user.create({
        name: name,
        email: email,
        age: age,
      });

      res.status(201).json(userAdded);
    }
    catch(error){
      console.log(error);
      res.status(400).json({error:error.message});
    }
  });

router.get('/', async(req, res) => {
  
    try{
      const showAll = await user.find();
      res.status(200).json(showAll);
  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:error.message});
    }
   
  });

//  get single user
router.get('/:id', async(req, res) => {
  
    const {id} = req.params;
    try{
      const singleuser = await user.findById({_id : id});
      res.status(200).json(singleuser);
  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:error.message});
    }
   
  });

// delete
router.delete('/:id', async(req, res) => {
  
    const {id} = req.params;
    try{
      const singleuser = await user.findByIdAndDelete({_id : id});
      res.status(200).json(singleuser);
  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:error.message});
    }
   
  });
// put/patch
router.patch('/:id', async(req, res) => {

  
    const {id} = req.params;
    const {name,email,age} = req.body;
    try{
      const singleuser = await user.findByIdAndUpdate(id.req.body,{
        now: true,
      });
      res.status(200).json(singleuser);
  
    }
    catch(error){
      console.log(error);
      res.status(500).json({error:error.message});
    }
   
  });

router.patch("/")
  module.exports = router;