import fetch from 'cross-fetch'

class ThemeAController {
   async defaultMethod() {
      console.log(await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=31.33&lon=34.23&exclude=hourly&appid=${process.env.NODE_TOKEN_OPENWEATHER}`, 
      {
         mode: 'cors',
      })
      .then(response => response.json()))
    }
  }
  
  export = new ThemeAController();