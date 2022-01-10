import fetch from 'cross-fetch';
import dotenv from 'dotenv'

dotenv.config()


class FetchBuilder { 
    public city_fetch:string
    public map_url:Map<string, string>

    constructor(city:string) {
        this.city_fetch = city
        this.map_url = new Map([
            ["visual_day", `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=hours&key=${process.env.NODE_VISUALAPI}&contentType=json`],
            ["visual_week", `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days&key=${process.env.NODE_VISUALAPI}&contentType=json`],
            ["weatherapi_day", `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NODE_TOKEN_WEATHERAPI}&q=${city}&days=1&aqi=no&alerts=yes`],
            ["weatherbit_week", `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.NODE_TOKEN_WEATHERBIT}`],

        ])
    }

    async fetch_consructor(provider_link:string){
        const link:string|undefined = this.map_url.get(provider_link)
        console.log(process.env.NODE_TOKEN_ACCUWEATHER)
        if (link != undefined){
            const obj = await fetch(link, 
                {
                    mode:'cors'
                })
            return await obj.json()
        }
    }
}

export default FetchBuilder;