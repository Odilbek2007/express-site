import express from "express";
import serverless from "serverless-http"
const app = express()

app.get('/', (req,res) => {
    res.send('dobro pojalovat na nash sayt')
})

app.get('/all', (req,res) => {
    res.json({
        name:"Odilbek", 
        hobby:{
            1:"programming",
            2:"workout", 
            3:"learn"
        }
    })
})
export const handler = serverless(app)