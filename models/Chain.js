const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chainSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurants: [{ type: Schema.Types.ObjectId, required: true, ref: 'Restaurant' }],
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Chain = mongoose.model("Chain", chainSchema);
module.exports = Chain;