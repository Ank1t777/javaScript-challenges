/* Challenge:
    1. Convert this function to an IIFE.
       You will need to figure out how to make 
       it async and how to pass in parameters.
*/

async function displayWeather(country) {
    const weather = await fetch('/geo.json')
    const weatherObj = await weather.json()
    console.log(`The weather in the ${country} today is ${weatherObj[country]}`)    
}

displayWeather('UK')