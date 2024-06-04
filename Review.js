const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  breweryId: { type: String, required: true },
  rating: { type: Number, required: true },
  description: String,
});

module.exports = mongoose.model('Review', ReviewSchema);
