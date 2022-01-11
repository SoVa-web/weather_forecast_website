import common_object from './template_obj';
import icon_map from './icon_map';

const conditions = new Map<string, number>([
    ["snow", 1],
    ["storm", 2],
    ["rain", 3],
    ["cloudy", 4],
    ["clear", 5]//sun or moon
])



class ChainOfResponsibility{
    private parsers: Array<Parser>;


	constructor(){
		this.parsers = [new ParserVisualDay(), new ParserVisualWeek(), new ParserWeatherAPIDay(), new ParserWeatherbitWeek()]
	}

	async chain(parser_key:string, obj:object){
		let result:object|undefined = {}
		for(let i = 0; i < this.parsers.length; i++){
			if (this.parsers[i].parser_key == parser_key) {
				try{
                    result = await this.parsers[i].parser(obj).then(res => {return res;})
				    return result
                }
                catch(err){
                    console.log(err)
                    return {}
                }
                
			}
		}
	}

}


interface Parser{
    parser(obj:any):Promise<object|undefined>;
}

abstract class Parser{
    public parser_key:string;
    
	constructor(parser_key:string){
		this.parser_key = parser_key
	}

} 

class ParserVisualDay extends Parser{
    constructor(){
        super("visual_day")
    }

    async parser(obj: any):Promise<object|undefined> {
        let pars_obj = JSON.parse(JSON.stringify(common_object))
        if (obj.days){
            for(let i = 0; i < obj.days[0].hours.length; i++){
                let datetime = obj.days[0].hours[i].datetime
                if(pars_obj.weather_today[datetime] != undefined){
                    pars_obj.weather_today[datetime].air_temp = obj.days[0].hours[i].temp
                    pars_obj.weather_today[datetime].img = def_icon(obj.days[0].hours[i].icon)
                    if (obj.days[0].hours[i].windspeed) pars_obj.weather_today[datetime].speed_wind = (parseFloat(obj.days[0].hours[i].windspeed) * 1000)/3600 //from kph to mps
                    if (obj.days[0].hours[i].humidity !== null) pars_obj.weather_today[datetime].humidity = obj.days[0].hours[i].humidity
                    if (obj.days[0].hours[i].precipprob) pars_obj.weather_today[datetime].prob = obj.days[0].hours[i].precipprob
                }
            }
        }
        return pars_obj; 
    }
}


class ParserVisualWeek extends Parser{
    constructor(){
        super("visual_week")
    }

    async parser(obj: any):Promise<object|undefined> {
        let pars_obj = JSON.parse(JSON.stringify(common_object)) 
        const week_keys:Array<string> = Object.keys(common_object.weather_week)
            for(let i = 0; i < week_keys.length; i++){
                pars_obj.weather_week[week_keys[i]].data = def_date(obj.days[i].datetime)
                if (obj.days[i].temp !== null) pars_obj.weather_week[week_keys[i]].air_temp = obj.days[i].temp
                pars_obj.weather_week[week_keys[i]].img = def_icon(obj.days[i].icon)
                if (obj.days[i].windspeed !== null) pars_obj.weather_week[week_keys[i]].speed_wind = (parseFloat(obj.days[i].windspeed)*1000)/3600 //from kph to mps
                if (obj.days[i].humidity !== null) pars_obj.weather_week[week_keys[i]].humidity = obj.days[i].humidity
                if (obj.days[i].precipprob) pars_obj.weather_week[week_keys[i]].prob = obj.days[i].precipprob
            }
        return pars_obj; 
    }
}



class ParserWeatherAPIDay extends Parser{
    constructor(){
        super("weatherapi_day")
    }

    async parser(obj: any):Promise<object|undefined> {
        let pars_obj = JSON.parse(JSON.stringify(common_object))
        if (obj.forecast !== undefined){
            for(let i = 0; i < obj.forecast.forecastday[0].hour.length; i++){
                let datetime = obj.forecast.forecastday[0].hour[i].time
                let time = datetime.substring(datetime.length - 5) + ":00"
                if(pars_obj.weather_today[time] != undefined){
                    pars_obj.weather_today[time].air_temp = obj.forecast.forecastday[0].hour[i].temp_c
                    pars_obj.weather_today[time].img = def_icon(obj.forecast.forecastday[0].hour[i].condition.text)
                    if (obj.forecast.forecastday[0].hour[i].wind_kph) pars_obj.weather_today[time].speed_wind = (parseFloat(obj.forecast.forecastday[0].hour[i].wind_kph)*1000)/3600 //from kph to mps
                    if (obj.forecast.forecastday[0].hour[i].humidity !== null) pars_obj.weather_today[time].humidity = obj.forecast.forecastday[0].hour[i].humidity
                }
            }
        }
        return pars_obj;
    }
}

class ParserWeatherbitWeek extends Parser{
    constructor(){
        super("weatherbit_week")
    }

    async parser(obj: any):Promise<object|undefined> {
        let pars_obj = JSON.parse(JSON.stringify(common_object))
        const week_keys:Array<string> = Object.keys(common_object.weather_week)
        for(let i = 0; i < week_keys.length; i++){
            pars_obj.weather_week[week_keys[i]].data = def_date(obj.data[i].datetime)
            if (obj.data[i].temp !== null) pars_obj.weather_week[week_keys[i]].air_temp = obj.data[i].temp
            pars_obj.weather_week[week_keys[i]].img = def_icon(obj.data[i].weather.icon[0])
            if (obj.data[i].weather.icon == "c01d") pars_obj.weather_week[week_keys[i]].img = "clear"
            if(obj.data[i].wind !== null) pars_obj.weather_week[week_keys[i]].speed_wind = obj.data[i].wind_spd 
            if(obj.data[i].rh !== null) pars_obj.weather_week[week_keys[i]].humidity = obj.data[i].rh 
            if(obj.data[i].pop !== null) pars_obj.weather_week[week_keys[i]].prob = obj.data[i].pop
        }
        return pars_obj;
    }
}


function def_icon(name_icon:string){
    let icon = icon_map.get(name_icon)
    if (icon == undefined) icon = "clear"
    return icon;
}


function def_date(date:string){
    let date_parse:string = date[date.length - 5] + date[date.length - 4] + "." + date[date.length -2] + date[date.length -1]
    return date_parse;
}

export default ChainOfResponsibility;