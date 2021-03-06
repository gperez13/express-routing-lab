const express = require('express');
const app = express();
const port = 3000;
const responses = require('./models/responses');



//Greetings

app.get('/greeting', (req, res) =>{
	res.send('Hello, is it me you\'re looking for?')
})




app.get('/greeting/:name', (req, res) =>{
	res.send('Hey there ' + req.params.name + ', what\'s it like in New York City?')
})




//Tip Calculator



app.get('/tip/:total/:tipPercentage', (req, res) =>{
	res.send('Your tip is: ' + (req.params.total/100) * req.params.tipPercentage )
})



//Magic 8 Ball



app.get('/magic/:question', (req, res) =>{
	let random = Math.floor(Math.random() * (20));
	res.send(req.params.question + '? ' + responses[random])

})








app.listen(port, () =>{
	console.log('smooth operator')
})