// Fonction appelée lors du click du bouton
function start(city) {
 
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data.list;

      
      
      data.map((d, i) => {
        
        // On récupère l'information principal
        const main = d.weather[0].main;
        const description = d.weather[0].description;
        const temp = d.temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(d.weather[0].icon);

        // Modifier le DOM
        document.getElementById(`day${i}-forecast-main`).innerHTML = main;
        document.getElementById(`day${i}-forecast-more-info`).innerHTML = description;
        document.getElementById(`day${i}-icon-weather-container`).innerHTML = icon;
        document.getElementById(`day${i}-forecast-temp`).innerHTML = `${temp}°C`;
        // }}
      })
    })
    .catch(function (error) {
      // Affiche une erreur
      console.error(error);
    });
}
