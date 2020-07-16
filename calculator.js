const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
    console.log('server is running on port 3000')
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/index.html', function(req, res) {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send('The calculation result is ' + result + '!')
})