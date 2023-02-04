
/*
 * PACKAGES NEEDS TO INSTALL BEFORE STARTING APP
 * NODE | Express | Moment 
 * npm i <package-name>
*/

const express = require('express')
const app = express()
const moment = require('moment')
app.get('/',(req , res)=>{
    res.send("default route")

})

/*

* Add 6 days to current date
* request : http://localhost:9000/addDays/6
* @param - days
* returns status and future date

*/

app.get("/addDays/:days" ,(req , res)=>{
    console.log("request received with params" , req.params)
    let currDate = moment()
    let futureDate = moment().add(req.params.days , 'days')

    console.log("current date" , currDate)
    console.log("future date " , futureDate)

    let response = {
        "futureDate" : futureDate.format("DD-MM-YYYY")
    }
    res.status(200).send(response)
})

/*

* Add 6 days to weeks date
* request : http://localhost:9000/addWeeks/6
* @param - days
* returns status and future date

*/

app.get("/addWeeks/:weeks" ,(req , res)=>{
    console.log("request received with params" , req.params)
    let currDate = moment()
    let futureDate = moment().add(req.params.weeks , 'weeks')

    console.log("current date" , currDate)
    console.log("future date " , futureDate)

    let response = {
        "futureDate" : futureDate.format("DD-MM-YYYY")
    }
    res.status(200).send(response)
})

/*

* Subtract  187  days to 2019 -jan 12 date
* request : http://localhost:9000/subtractDays/187
* @param - days
* returns status and past date

*/

app.get("/subtractDays/:days" ,(req , res)=>{
    console.log("request received with params" , req.params)
    let date = moment(new Date(2019, 1,12 ))
    let pastDate = moment(date).subtract(req.params.days , 'days')

    console.log("current date" , date)
    console.log("future date " , pastDate)

    let response = {
        "pastDate" : pastDate.format("DD-MM-YYYY")
    }
    res.status(200).send(response)
})

/*
    Application runs on 9000 port
    command to start application  node calendar.js
*/
app.listen(9000 , ()=>{
    console.log("application started")
})
