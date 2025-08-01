const getTsunamiAlerts = async () => {
  const response = await axios.get("https://www.gdacs.org/gdacsapi/api/events/geteventlist/tsunami");
  return response.data.features.filter(event => 
    event.properties.alertlevel === "Red"
  );
};

const getTides = async (stationId) => {
  const url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?station=${stationId}&product=predictions&interval=hilo&format=json`;
  return (await axios.get(url)).data.predictions;
};

// Match tsunami location to nearest NOAA tide station
const stationMap = {
  "California": "9414290",
  "Japan": "TG0092"
};