import express from 'express'
import cors from 'cors'
import bodyParser from 'express'
import Agregator from './agregation'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const app = express()


app.use(cors())
app.use(bodyParser.json());

const port = 5000

  

app.post('/', async (request, response) => {
    console.log("poooooooooooooooost")
    const result = await Agregator(request.body.city)
    response.send(result)
})


app.listen(process.env.PORT|| port, () => {
    console.log(`server is listening on ${port}`)
})