const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Chain = require('../models/Chain');

router.get('/', (req, res) => {
  res.send('Good to go')
})

//GET RESTAURANTS
router.get('/restaurants', async (req, res) => {
  try{
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch(err){
    res.json(err)
  }
})

//POST RESTAURANT
router.post('/restaurants', async (req, res) => {
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
router.get('/restaurants/:restaurantId', async (req, res) => {
  try{
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    res.json({ message: `${restaurant.name} has been found`, restaurant });
  }catch(err){
    res.json({ message: 'Something went wrong while finding a restaurant'})
  }
})

//DELETE A RESTAURANT
router.delete('/restaurants/:restaurantId', async (req, res) => {
  try {
    const removedRestaurant = await Restaurant.remove({ _id: req.params.restaurantId});
    res.json({ message: `Restaurant successfully deleted`})
  } catch(err){
    res.json({ message: 'Something went wrong while deleting a restaurant'})
  }
})




module.exports = router;