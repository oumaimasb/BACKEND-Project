// const axios = require("axios");  // to fetching a data
const HttpError = require("../models/http-error");

async function getCoordsForAddress(address) {
  return {
    lat: 31.625971,
    lng: -7.989098,
  };

  // the code to write in case we have a real data from google maps

  //   const response = await axios.get(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
  //       address
  //     )}&key=YOUR_API_KEY`
  //   );
  //   const data = response.data;
  //   if (!data || data.status === "ZERO_RESULTS") {
  //     const error = new HttpError("Could not find location", 422);
  //     throw error;
  //   }
  //   const coordinates = data.results[0].geometry.location;
  //   return coordinates;
}

module.exports = getCoordsForAddress;
