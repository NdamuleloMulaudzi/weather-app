
async function getWeatherData(locationName){
   const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=T3NEGCXRXBKQ8WV3NRQY2LWPC`, 
    {mode:"cors"})
   
    const weatherData = await response.json()
    
    console.log(weatherData)
}


export {getWeatherData}
