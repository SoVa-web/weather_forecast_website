import {generate_advice, most_often} from '../agregation';
import FetchBuilder from '../fetch_builder';
import ChainOfResponsibility from '../cofr_parser';
import { agregation } from '../agregation';
import {avr_temp_week} from '../agregation';
import common_object from '../template_obj';
import {avr_temp_today} from '../agregation';
import Agregator from '../agregation';
import {avr_humidity_today} from '../agregation';
import {avr_item_icon_week} from '../agregation'
import { HIGH_TEMP } from '../agregation';
import { FOG } from '../agregation';


const city:string = "London"
const fetch_builder = new FetchBuilder(city)
const city_no_valid:string = "fgh"
const fetch_builder_no_valid = new FetchBuilder(city_no_valid)
const ch = new ChainOfResponsibility()
const arr_keys = Array.from(fetch_builder.map_url.keys());

describe('Aggregate function tests', () => {
    it('Function test to find the element with the highest occurrence', async () => {
        const arr_string:any = ["clear", "gg", "clear", "clear", "jjj", "jjj", "a"]
        const res:any = "clear"

        expect(most_often(arr_string)).toEqual(res)
    })
    it('Function test to find the element with the highest occurrence with empty array', async () => {
        const arr_string:any = []
        const res:any = ""

        expect(most_often(arr_string)).toEqual(res)
    })
    it('Test avr_temp_week with non empty ', async ()=>{
        let res:any; 
        res = await Promise.all( 
            arr_keys.map(key => fetch_builder.fetch_consructor(key))
        )
        let result = []
        for(let i = 0; i < res.length; i++) result.push(await ch.chain(arr_keys[i], res[i]).then(f => {return f}))
            

        expect(typeof(avr_temp_week(result, Object.keys(common_object.weather_week), 1))).toEqual("number")
    })


    it('Test avr_temp_today with empty ', async ()=>{
        let obj = JSON.parse(JSON.stringify(common_object))
        obj.weather_today["06:00:00"].air_temp = "33"
        let result:any = [obj]
        expect(avr_temp_today(result, Object.keys(common_object.weather_today), 1)).toEqual(33)
    })


    it('Test avr_humidity_today with empty ', async ()=>{
        let obj = JSON.parse(JSON.stringify(common_object))
        obj.weather_today["06:00:00"].humidity = "33"
        let result:any = [obj]
        expect(avr_humidity_today(result, Object.keys(common_object.weather_today), 1)).toEqual(33)
    })

    it('Test avr_item_icon_week with non empty ', async ()=>{
        let obj = JSON.parse(JSON.stringify(common_object))
        obj.weather_week["second_day"].img = "clear"
        let result:any = [obj]
            

        expect(avr_item_icon_week(result, Object.keys(common_object.weather_week), 1)).toEqual("clear")
    })

    it('Test Agregator', async ()=>{
        expect(typeof(Agregator(city))).toEqual("object")
    })

    it('Test Agregator with wrong city', async ()=>{
        expect(await Agregator(city_no_valid).then(f => {return f;})).toEqual({})
    })

    it('Test get_advice if temp is high', async ()=>{
        let obj:any = JSON.parse(JSON.stringify(common_object))
        let arr_h:any = Array.from(Object.keys(obj.weather_today))
        obj.weather_today["00:00:00"].air_temp = "44 °C"
        expect(generate_advice(obj, arr_h).weather_today.today_advice).toEqual(HIGH_TEMP)
    })

    it('Test get_advice if fog', async ()=>{
        let obj:any = JSON.parse(JSON.stringify(common_object))
        let arr_h:any = Array.from(Object.keys(obj.weather_today))
        obj.weather_today["00:00:00"].img = "fog"
        expect(generate_advice(obj, arr_h).weather_today.today_advice).toEqual(FOG)
    })
})

describe('Test of fetch builder', ()=>{
    it('Fetch builder, if city exists', async () => {
        expect(typeof(await fetch_builder.fetch_consructor("visual_day"))).toEqual("object")
    })

    it('Fetch builder, if city not exists', async () => {
        expect(await fetch_builder_no_valid.fetch_consructor("visual_day")).toEqual({})
    })
})

describe('Test of parser', ()=>{
    it('Test of chain of responsibility with ParserVisualDay', async () => {
        let res = await fetch_builder.fetch_consructor("visual_day").then(f => {return f});
        expect(typeof(ch.chain("visual_day", res))).toEqual("object")
    })

    it('Test of chain of responsibility with non existed key and empty object', async () => {
        let res = {}
        expect(typeof(ch.chain("weatherbit", res))).toEqual("object")
    })
})





