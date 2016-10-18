// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.get('/:operator/:num1/:num2?', function (req, res) {
	var operator = req.params.operator;
	var num1 = parseFloat(req.params.num1);
	var num2 = parseFloat(req.params.num2);
	var result;

	switch (operator) {
		case "add":
			result = num1 + num2;
			break;
		case "subtract":
			result = num1 - num2;
			break;
		case "multiply":
			result = num1 * num2;
			break;
		case "divide":
			result = num1 / num2;
			break;
		default:
			result = "you gotta learn math sucka! add, multiply, subtract, divide!!"
	}
	res.send(result.toString());
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});