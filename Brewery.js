const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
  breweryId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: String,
  phone: String,
  website_url: String,
  state: String,
  city: String,
  type: String,
});

module.exports = mongoose.model('Brewery', BrewerySchema);
