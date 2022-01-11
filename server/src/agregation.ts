import { keys } from 'ts-transformer-keys';
import FetchBuilder from "./fetch_builder";
import common_object from './template_obj';
import ChainOfResponsibility from './cofr_parser'

const MORNING_TIME: number = 6;
const FOG = `Fog and limited visibility are expected. Be careful.`;
const STORM  = `Storm warning. Perhaps with a downpour.`;
const HIGH_TEMP = `High temperature is dangerous for human health. People with chronic heart disease should refrain from being outside.`
const NICE_DAY = "It`s a nice day! It`s time for big things to do!"

async function Agregator(city:string){
    const fetch_builder = new FetchBuilder(city);
    const arr_keys = Array.from(fetch_builder.map_url.keys());
    let res:any;
    try{ 
        res = await Promise.all( 
            arr_keys.map(key => fetch_builder.fetch_consructor(key))
        )
        const ch = new ChainOfResponsibility()
        let result = []
        for(let i = 0; i < res.length; i++) if (res[i] !== {}) result.push(await ch.chain(arr_keys[i], res[i]).then(f => {return f}))
        let created_pred = agregation(result)
        return created_pred;
    }catch(err){
        console.log(err)
        return {};
    }
}

export function agregation(arr: any){
    let obj = JSON.parse(JSON.stringify(common_object))
    let arr_hour = Object.keys(obj.weather_today)
    let arr_days = Object.keys(obj.weather_week)
    for(let i = 0; i < (arr_hour.length -1); i++){
        obj.weather_today[arr_hour[i]].air_temp = avr_temp_today(arr, arr_hour, i)?.toFixed(1) + " °C"
        obj.weather_today[arr_hour[i]].img = avr_item_icon_today(arr, arr_hour, i)
        obj.weather_today[arr_hour[i]].speed_wind = avr_speed_wind_today(arr, arr_hour, i)?.toFixed(1) + " m/s"
        obj.weather_today[arr_hour[i]].humidity = avr_humidity_today(arr, arr_hour, i)?.toFixed(1) + " %"
    }
    for(let i = 0; i < arr_days.length; i++){
        obj.weather_week[arr_days[i]].air_temp = avr_temp_week(arr, arr_days, i)?.toFixed(1) + " °C"
        obj.weather_week[arr_days[i]].img = avr_item_icon_week(arr, arr_days, i)
        obj.weather_week[arr_days[i]].data = get_data_week(arr, arr_days, i)
        obj.weather_week[arr_days[i]].speed_wind = avr_speed_wind_week(arr, arr_days, i)?.toFixed(1) + " m/s"
        if (avr_humidity_week(arr, arr_days, i)) obj.weather_week[arr_days[i]].humidity = avr_humidity_week(arr, arr_days, i)?.toFixed(1) + " %"
        if (avr_prob_week(arr, arr_days, i)) obj.weather_week[arr_days[i]].prob = avr_prob_week(arr, arr_days, i)?.toFixed(1) + " %"
    }
    obj = generate_advice(obj, arr_hour);
    return obj;
}

function generate_advice(obj:any, arr_hour:any){
  let str_advice = NICE_DAY
  
  for (let i = 0; i < (arr_hour.length -1); i++){
    if ( obj.weather_today[arr_hour[i]].air_temp !== null && obj.weather_today[arr_hour[i]].air_temp && obj.weather_today[arr_hour[i]].air_temp !== ""){
      let t:number = obj.weather_today[arr_hour[i]].air_temp.substring(0, obj.weather_today[arr_hour[i]].air_temp.length - 2)
      if (t > 30){ //30°C is the most comfortable temp for people
        
        str_advice = HIGH_TEMP
      }
    }
    if(obj.weather_today[arr_hour[i]].img === "fog"){
      str_advice = FOG
    }
    if(obj.weather_today[arr_hour[i]].img === "storm"){
      str_advice = STORM
    }
  }
  obj.weather_today.today_advice = str_advice
  return obj;
}

function avr_prob_week(arr: any, arr_week: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_week[i]].prob !== ""){
        sum += arr[j].weather_week[arr_week[i]].prob
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

function avr_humidity_week(arr: any, arr_week: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_week[i]].humidity !== ""){
        sum += arr[j].weather_week[arr_week[i]].humidity
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

export function avr_humidity_today(arr: any, arr_hour: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_today[arr_hour[i]].humidity !== ""){
        sum += arr[j].weather_today[arr_hour[i]].humidity
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

function avr_speed_wind_week(arr: any, arr_week: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_week[i]].speed_wind !== ""){
        sum += arr[j].weather_week[arr_week[i]].speed_wind
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

function avr_speed_wind_today(arr: any, arr_hour: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_today[arr_hour[i]].speed_wind !== ""){
        sum += arr[j].weather_today[arr_hour[i]].speed_wind
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

function get_data_week(arr: any, arr_days: Array<string>, i: number){
    for(let j = 0; j < arr.length; j++){
        if (arr[j].weather_week[arr_days[i]].data !== ""){
          return arr[j].weather_week[arr_days[i]].data;
        }
    }
    return null;
}

export function most_often(arr: any) {
    let el = [], count = [], last;
    arr.sort();
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== last ) {
            el.push(arr[i]);
            count.push(1);
        } else count[count.length-1] += 1;
        last = arr[i];
    }

    let max_often = Math.max(...count)
    let index = count.indexOf(max_often)

    if (!el[index]) return ""
    return el[index];
}

export function avr_item_icon_today(arr: any, arr_hour: Array<string>, i: number){
    let sum: Array<string> = []
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_today[arr_hour[i]].img !== ""){
        sum.push(arr[j].weather_today[arr_hour[i]].img)
      }
    }
    if (sum.length == 0) return null;
    else {
        let res = most_often(sum);
        let part_day_time: number = parseInt(arr_hour[i].substring(0, 2))
        if (res == "clear" && part_day_time < MORNING_TIME){ 
            return "moon";
        }
        if (res == "cloudy" && part_day_time < MORNING_TIME){
            return "moon_cloudy";
        }
        return res;
    } 
}

export function avr_item_icon_week(arr: any, arr_days: Array<string>, i: number){
    let sum: Array<string> = []
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_days[i]].img !== ""){
        sum.push(arr[j].weather_week[arr_days[i]].img)
      }
    }
    if (sum.length == 0) return null;
    else return most_often(sum);
}

export function avr_temp_today(arr: any, arr_hour: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_today[arr_hour[i]].air_temp !== ""){
        sum += arr[j].weather_today[arr_hour[i]].air_temp
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}

export function avr_temp_week(arr: any, arr_week: Array<string>, i: number){
    let sum:number = 0
    let count: number = 0
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_week[i]].air_temp !== ""){
        sum += arr[j].weather_week[arr_week[i]].air_temp
        count += 1
      }
    }
    if (sum == 0) return null;
    return sum/count
}




export default Agregator;