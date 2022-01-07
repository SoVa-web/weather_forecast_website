import fetch from 'cross-fetch';
import dotenv from 'dotenv'
import NODE_TOKEN from 'process'

dotenv.config()

const token_open_weather = process.env.NODE_TOKEN

class FetchBuilder { 
    public city_fetch:string
    public map_url:Map<string, string>

    constructor(city:string) {
        this.city_fetch = city
        this.map_url = new Map([
            ["provider1", `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${token_open_weather}`]
        ])
    }


    async fetch_consructor(provider_link:string){
        const link:string|undefined = this.map_url.get(provider_link)
        const b = process.env.NODE_TOKEN
        console.log(b)
        if (link != undefined){
            const obj = await fetch(link, 
                {
                    mode:'cors'
                })
            const b = await obj.json()
            //console.log(b)
            return b
        }
    }
   

}

export default FetchBuilder;