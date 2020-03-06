const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const Chain = require('../models/Chain');

router.get('/', (req, res) => {
  res.send('Good to go')
})

//GET RESTAURANTS ROUTE
router.get('/restaurants', (req, res) => {
  res.send('We are on Restaurants')
})

router.post('/restaurants', (req, res) => {
  const { name, location, chain } = req.body;
  Restaurant.create({
    name,
    location,
    chain
  })
  .then(newRestaurant => {
    console.log(newRestaurant);
    res.status(200).json({ message: `${newRestaurant.name} has been added to Restaurants`, newRestaurant })
  })
  .catch(error => {
    res.status(500).json({ message: 'Something went wrong while adding a new Restaurant', error });
  })
})



module.exports = router;