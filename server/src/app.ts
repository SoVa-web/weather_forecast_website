import express from 'express'
import cors from 'cors'
import bodyParser from 'express'
import Agregator from './agregation'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000


app.get('/weather', async (request, response) => {

    console.log("GET /weather backend")

    let city = String(request.query.city) 

    console.log("Got city :" + city)

    const result = await Agregator(city)

    response.send(result)
})


app.listen(process.env.PORT|| port, () => {
    console.log(`Server is starting on ${port}`)
})