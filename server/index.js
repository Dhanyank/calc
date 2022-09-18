const express = require('express')

//dataservice
const dataService=require('./services/data.service')
const cors = require('cors')
const app = express()
const router =  express.Router();


app.use(cors({
    origin: 'http://localhost:4200'
}))

app.listen(3000, () => {
    console.log("Server started at 3000")
})

// to parse json data
app.use(express.json())

// Resolving API calls
// GET to read data
app.get('/', (req, res) => {
    res.send("GET REQUEST")
})

app.get('/calc',(req, res)=>{
    res.send('${answer}');
});


// app.get('/calc', (req, res) => {
//     // asynchronous
//     dataService.calc(req.body.qstn)
//         .then(result => {
//             res.status(result.statusCode).json(answer)
//         })

// })