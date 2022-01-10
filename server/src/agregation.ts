import { keys } from 'ts-transformer-keys';
import FetchBuilder from "./fetch_builder";
import common_object from './template_obj';
import ChainOfResponsibility from './cofr_parser'

const MORNING_TIME: number = 6

async function Agregator(city:string){
    const fetch_builder = new FetchBuilder(city);
    const arr_keys = Array.from(fetch_builder.map_url.keys());
    let res:any;
    try{ 
        console.time('FirstWay');
        res = await Promise.all( 
            arr_keys.map(key => fetch_builder.fetch_consructor(key))
        )
        const ch = new ChainOfResponsibility()
        let result = []
        for(let i = 0; i < res.length; i++) result.push(await ch.chain(arr_keys[i], res[i]).then(f => {return f}))
        let created_pred = agregation(result)
        console.timeEnd('FirstWay');
        return created_pred;
    }catch(err){
        console.log(err)
        return {};
    }
}

function agregation(arr: any){
    let obj = JSON.parse(JSON.stringify(common_object))
    let arr_hour = Object.keys(obj.weather_today)
    let arr_days = Object.keys(obj.weather_week)
    for(let i = 0; i < (arr_hour.length -1); i++){
        obj.weather_today[arr_hour[i]].air_temp = avr_temp_today(arr, arr_hour, i)?.toFixed(1) + "°C"
        obj.weather_today[arr_hour[i]].img = avr_item_icon_today(arr, arr_hour, i)
    }
    for(let i = 0; i < arr_days.length; i++){
        obj.weather_week[arr_days[i]].air_temp = avr_temp_week(arr, arr_days, i)?.toFixed(1) + "°C"
        obj.weather_week[arr_days[i]].img = avr_item_icon_week(arr, arr_days, i)
        obj.weather_week[arr_days[i]].data = get_data_week(arr, arr_days, i)
    }
    return obj;
}

function get_data_week(arr: any, arr_days: Array<string>, i: number){
    for(let j = 0; j < arr.length; j++){
        if (arr[j].weather_week[arr_days[i]].data !== ""){
          return arr[j].weather_week[arr_days[i]].data;
        }
    }
}

function most_often(arr: any) {
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

    return el[index];
}

function avr_item_icon_today(arr: any, arr_hour: Array<string>, i: number){
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

function avr_item_icon_week(arr: any, arr_days: Array<string>, i: number){
    let sum: Array<string> = []
    for(let j = 0; j < arr.length; j++){
      if (arr[j].weather_week[arr_days[i]].img !== ""){
        sum.push(arr[j].weather_week[arr_days[i]].img)
      }
    }
    if (sum.length == 0) return null;
    else return most_often(sum);
}

function avr_temp_today(arr: any, arr_hour: Array<string>, i: number){
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

function avr_temp_week(arr: any, arr_week: Array<string>, i: number){
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