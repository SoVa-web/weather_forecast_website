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

const valid_characters:string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm `''--"