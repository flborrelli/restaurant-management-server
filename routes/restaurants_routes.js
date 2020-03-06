const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');


//GET RESTAURANTS
router.get('/', async (req, res) => {
  try{
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch(err){
    res.status(500).json(err)
  }
})

//POST RESTAURANT
router.post('/', async (req, res) => {
  const { name, location, chain } = req.body; 
  try{
    const createdRestaurant = await Restaurant.create({
      name,
      location,
      chain
    }) 
    res.status(200).json({ message: `${createdRestaurant.name} has been added to Restaurants`, createdRestaurant})
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while adding a new Restaurant', error });
  }
})

//GET A SPECIFIC RESTAURANT
router.get('/:restaurantId', async (req, res) => {
  try{
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    res.status(200).json({ message: `${restaurant.name} has been found`, restaurant });
  }catch(err){
    res.status(500).json({ message: 'Something went wrong while finding a restaurant'})
  }
})

//UPDATE A RESTAURANT
router.patch('/:restaurantId', async (req, res) => {
  const { restaurantId } = req.params;
  const { name, location, chain } = req.body;
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, { name, location, chain }, {
      new: true });
    res.status(200).json({ message: `${updatedRestaurant.name} was updated`, updatedRestaurant })
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while updating a restaurant'})
  }
})

//DELETE A RESTAURANT
router.delete('/:restaurantId', async (req, res) => {
  try {
    const removedRestaurant = await Restaurant.remove({ _id: req.params.restaurantId});
    res.status(200).json({ message: `Restaurant successfully deleted`})
  } catch(err){
    res.status(500).json({ message: 'Something went wrong while deleting a restaurant'})
  }
})

module.exports = router;