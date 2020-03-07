const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Chain = require('../models/Chain');
const Restaurant = require('../models/Restaurant');


//GET CHAINS
router.get('/', async (req, res) => {
  try{
    const chains = await Chain.find().populate('restaurants');
    res.status(200).json(chains)
  } catch(err){ 
    res.status(500).json(err)
  }
})

//POST CHAIN
router.post('/', async (req, res) => {
  const { name, restaurants } = req.body; 
  try{
    const createdChain = await Chain.create({
      name
    }) 
    res.status(200).json({ message: `${createdChain.name} has been added to Restaurant Chain`, createdChain})
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while adding a new Restaurant Chain', err });
  }
})

//GET A SPECIFIC CHAIN
router.get('/:chainId', async (req, res) => {
  try{
    const chain = await Chain.findById(req.params.chainId);
    res.status(200).json({ message: `${chain.name} has been found`, chain });
  }catch(err){
    res.status(500).json({ message: 'Something went wrong while finding a restaurant chain'})
  }
})

//UPDATE A CHAIN
router.patch('/:chainId', async (req, res) => {
  const { chainId } = req.params;
  const { name } = req.body;
  try {
    const updatedChain = await Chain.findByIdAndUpdate(chainId, { name }, {
      new: true });
    res.status(200).json({ message: `${updatedChain.name} was updated`, updatedChain })
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while updating a restaurant chain'})
  }
})

//DELETE A CHAIN
router.delete('/:chainId', async (req, res) => {
  try {
    const removedChain = await Chain.remove({ _id: req.params.chainId});
    res.status(200).json({ message: `Restaurant chain successfully deleted`})
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while deleting a restaurant chain'})
  }
})

module.exports = router;