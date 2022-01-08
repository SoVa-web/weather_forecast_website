import express from 'express'
import cors from 'cors'
import bodyParser from 'express'
import Agregator from './agregation'



const app = express()

app.use(cors())
app.use(bodyParser.json());

const port = 5000


app.post('/', async (request, response) => {
    const result = await Agregator(request.body.city)
    response.send(result)
})


app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})