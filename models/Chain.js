const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurants: [{ type: String, required: true}],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Chain = mongoose.model("Chain", chainSchema);
module.exports = Chain;