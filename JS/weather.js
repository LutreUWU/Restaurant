BGsunset = document.querySelector(".Sunset")
BGday = document.querySelector(".Day")
BGnight = document.querySelector(".Night")
BG = document.querySelector(".background")



// position géographique de Bussy 

var latitude = 48.84195010820722;
var longitude = 2.724389695808802;

// URL de l'API Sunrise-Sunset avec les coordonnées
var apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;

// Effectuer une requête HTTP GET à l'API Sunrise-Sunset


fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    
    
    // Extraire l'heure du lever du soleil de la réponse de l'API
    var sunrise = data.results.sunrise;
    var sunset = data.results.sunset;
   
    // Convertir l'heure du lever du soleil en objet Date
    var heureLeverSoleil = new Date(`2000-01-01 ${sunrise}`);
    var heureLeverSoleilUTC2 =  new Date(heureLeverSoleil.getTime() + (2 * 60 * 60 * 1000));

    var heurecoucherSoleil = new Date(`2000-01-01 ${sunset}`);
    var heurecoucherSoleilUTC2 =  new Date(heurecoucherSoleil.getTime() + (2 * 60 * 60 * 1000));
    // Vérifier si l'heure actuelle est supérieure à l'heure du lever du soleil

    
    now = new Date()
    
    sunriseHours = heureLeverSoleilUTC2.getHours();
    sunriseMinutes =  heureLeverSoleilUTC2.getMinutes()
    sunriseSeconds =  heureLeverSoleilUTC2.getSeconds()

    sunsetHours = heurecoucherSoleilUTC2.getHours();
    sunsetMinutes =  heurecoucherSoleilUTC2.getMinutes()
    sunsetSeconds =  heurecoucherSoleilUTC2.getSeconds()

    console.log(sunsetHours)
    console.log(sunsetMinutes)

    minuteGap = 0
    updateOpacitySunset()
  
  })
  
  
  setInterval(function() {
    var NewHour = new Date();
   

    if (NewHour !== now) {
     
      now = new Date()
      updateOpacitySunset()
     
    }
    
  }, 10000); 


  function computeOpacitySunset() {
    if (now.getHours() < sunriseHours) {
      return 0
    } else if (now.getHours() * 60 + now.getMinutes() >= (sunriseHours) * 60 + sunriseMinutes && now.getHours() * 60 + now.getMinutes() <= (sunriseHours) * 60 + sunriseMinutes + 30 ) { // Si (l'heures d'aujourd'hui est supérieur à l'heure du lever du soleil && Que l'heure d'aujourd'hui soit inférieur à l'heure du lever du soleil + 30 min )
     
      opacity = (  (now.getHours() * 60 + now.getMinutes())   -   ((sunriseHours) * 60 + sunriseMinutes )   ) / 30 
      return opacity
      
    } else if (now.getHours() * 60 + now.getMinutes() > (sunriseHours) * 60 + sunriseMinutes + 30 ){
      BG.style.backgroundImage = "url('../RestaurantImage/imgDay/Restau\ Day.jpg')"
      return 1
    }

     
  }

  function computeOpacityDay() {
    if ( (now.getHours() * 60 + now.getMinutes() <= (sunriseHours) * 60 + sunriseMinutes + 30) ) {
      
      return 0
    } else if (now.getHours() * 60 + now.getMinutes() > (sunriseHours) * 60 + sunriseMinutes + 30  && now.getHours() * 60 + now.getMinutes() <= (sunriseHours) * 60 + sunriseMinutes + 60  ){
      
      opacityDay = (  (now.getHours() * 60 + now.getMinutes())   -   ((sunriseHours) * 60 + sunriseMinutes + 30)   ) / 30 
      
      return opacityDay
      
      
    }  else if (now.getHours() * 60 + now.getMinutes() > (sunriseHours) * 60 + sunriseMinutes + 60 ){
      BG.style.backgroundImage = "url('../RestaurantImage/imgSunset/Restau\ Sunset.jpg')"
      return 1
    }

     
  }
  
  function computeOpacityNight() {
    if ( (now.getHours() * 60 + now.getMinutes() <= (sunsetHours) * 60 + sunsetMinutes) ) {
      
      return 0
    } else if (now.getHours() * 60 + now.getMinutes() >  (sunsetHours) * 60 + sunsetMinutes && now.getHours() * 60 + now.getMinutes() <=  (sunsetHours) * 60 + sunsetMinutes + 30  ){
      
      opacityNight = (  (now.getHours() * 60 + now.getMinutes())   -   ((sunsetHours) * 60 + sunsetMinutes)   ) / 30 
      
      return opacityNight
      
      
    }  else if (now.getHours() * 60 + now.getMinutes() > (sunsetHours) * 60 + sunsetMinutes + 30 ){
      BG.style.backgroundImage = "url('../RestaurantImage/imgNight/Restau\ Night.jpg')";

      return 1
    }

     
  }

  var images = document.querySelectorAll(".Sunset, .Day, .Night");

      function adjustPointerEvents() {
        images.forEach(function(image) {
          if (parseFloat(getComputedStyle(image).opacity) <= 0.2) {
            image.style.pointerEvents = "none";
          } else {
            image.style.pointerEvents = "auto";
          }
        });
      }


  function updateOpacitySunset() {
    
   
    BGsunset.style.opacity = computeOpacitySunset() - computeOpacityDay();
    
    BGday.style.opacity = computeOpacityDay() - computeOpacityNight();
    
    BGnight.style.opacity = 1 - computeOpacitySunset() + computeOpacityNight();

    adjustPointerEvents();
    
  }


