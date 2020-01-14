const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./db');
const collection = 'todo';

app.get('/', (req, res)=> {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/getTodos', (req, res)=> {
	db.getDb().collection(collection).find({}).toArray((err, documents)=> {
		if(err) {
			console.log(err);
		} else {
			console.log(documents);
			res.json(documents);
		}
	})
});

app.put('/:id', (req, res) => {
	const todoId= req.params.id;
	const userInput = req.body;

	db.getDb().collection(collection).findOneAndUpdate( {_id: getPrimaryKey(todoId)}, {$set: {todo: userInput.todo} }, {returnOriginal: false}, (err, result) => {
		if(err) {
			console.log(err);
		} else {
			res.json(result);
		}
	} )
});

app.post('/', (req, res)=> {
	const userInput = req.body;
	db.getDb().collection(collection).insertOne(userInput, (err, result) => {
		if(err) {
			console.log(err);
		}		else {
			res.json( {result : result, document : result.ops[0] });
		}
	});
});

app.delete('/:id', (req, res) => {
	const todoId = req.params.id;

	db.getDb().collection(collection).findOneAndDelete({_id: db.getPrimaryKey(todoId) },(err, result) => {
		if(err) {
			console.log(err)
		}
		else {
			res.json(result)
		}
	} )
})

db.connect((err)=> {
	if(err){
		console.log('unable connect db');
		proccess.exit(1);
	} else {
		app.listen(3000, () => {
			console.log(' connect done');
		});
	}
})


