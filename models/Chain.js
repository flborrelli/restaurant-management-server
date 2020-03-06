const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new Schema({
  name: String,
  restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Chain = mongoose.model("Chain", chainSchema);
module.exports = Chain;