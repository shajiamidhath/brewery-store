const axios = require('axios');

exports.searchBreweries = async (req, res) => {
  const { by_city, by_name, by_type } = req.query;
  let query = '';
  if (by_city) query += `by_city=${by_city}&`;
  if (by_name) query += `by_name=${by_name}&`;
  if (by_type) query += `by_type=${by_type}&`;
  try {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries?${query}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getBreweryDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
