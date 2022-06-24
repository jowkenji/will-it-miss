/* eslint-env node */
const axios = require('axios');
const addDays = require('date-fns/addDays');

function getDate(d = new Date()) {
  return d.toJSON().split('T')[0];
}

// tests the structure of the json is the way we expect
function test() {
  return axios
    .get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&api_key=DEMO_KEY`
    )
    .then(({ data }) => {
        throw new Error(data)
    });
}

module.exports = test;