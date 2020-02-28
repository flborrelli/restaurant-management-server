const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new Schema({
  name: String,
  restaurants: [],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Chain = mongoose.model("Chain", chainSchema);
module.exports = Chain;