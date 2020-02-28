const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  location: String,
  chain: '',
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;