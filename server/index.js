const express = require('express');

const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use;

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'online_shopping',
});

app.listen(5000, () => {
	console.log(`listening on port ${port}`);
});

app.get('/:id', (req, res) => {
	db.getConnection((err, connection) => {
		if (err) throw err;
		console.log(`connected as id ${connection.threadId}`);

		connection.query('SELECT * FROM customer WHERE CID = ?', [req.params.id], (err, rows) => {
			connection.release();
			if (!err) {
				res.send(rows);
			} else {
				console.log(err);
			}
		});
	});
});
