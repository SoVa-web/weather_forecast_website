import express from 'express'
import cors from 'cors'
import bodyParser from 'express'
import Agregator from './agregation'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { validateLocaleAndSetLanguage } from 'typescript';
import html from './design';



const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000


app.get('/weather', async (request, response) => {

    console.log("GET /weather backend")

    let city = String(request.query.city) 

    console.log("Got city :" + city)
    
    let result:any;

    if (valid(city)) result = await Agregator(city)
    else result = {
        error: "The data obtained is not valid. Check that the name of the region is spelled correctly. It can contain only Latin letters, spaces, apostrophes and hyphens."
    }    
    response.send(result)

})

app.get('/weatherbyhours', async (request, response) => { //weatherbyhours?city=London&time=12

    console.log("GET /weatherbyhours backend")

    let city = String(request.query.city) 
    let time = String(request.query.time)
    let string_time = time + ":00:00"
    let ost = 0
    let new_time: number;
    let new_time_string:string = "";

    console.log("Got city :" + city)
    
    let result:any;
    let buf:any;
    if (validtime(time)) {
        if (valid(city)){
            buf = await Agregator(city)
            if (Number(time)%3 === 0){//кратне 3
                result = buf.weather_today[string_time]
            }
            else{
                ost = Number(time)%3
                if(ost === 1) new_time = Number(time) - ost
                else new_time = Number(time) + 1
                if (new_time < 10){
                    new_time_string = "0"+ String(new_time)+ ":00:00"
                }else{
                    new_time_string = String(new_time)+ ":00:00"
                }
                result = buf.weather_today[new_time_string]
            }
            
        }
        else result = {
                error: "The data obtained is not valid. Check that the name of the region is spelled correctly. It can contain only Latin letters, spaces, apostrophes and hyphens."
        }    
    }else{
        result = {
            error: "The data obtained is not valid. Check that the time. Corect format from 00 to 23. Can include only number"
    }    
    }
    
    response.send(result)

})

app.get('/', async (request, response) => {
    let res = html;
    response.send(res)
})


app.listen(process.env.PORT|| port, () => {
    console.log(`Server is starting on ${port}`)
})

function valid(city: string){
    let valid:boolean = true;

    for (let i = 0; i < city.length; i++){
        valid = false
        for (let k = 0; k < valid_characters.length; k++){
            if (valid_characters[k] === city[i]) valid = true;
        }
        if (!valid) return false;
    }

    return true;
}

function validtime(time: string){
    let valid:boolean = true;

    for (let i = 0; i < time.length; i++){
        valid = false
        for (let k = 0; k < valid_time.length; k++){
            if (valid_time[k] === time[i]) valid = true;
        }
        if (!valid) return false;
    }
    if(Number(time) >= 24) return false

    return true;
}

const valid_characters:string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm `''--"
const valid_time:string = "0123456789"