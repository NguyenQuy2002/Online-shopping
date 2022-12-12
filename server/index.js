const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'online_shopping',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

categories = ['Dresses', 'Pants', 'Shirts', 'Hats', 'Shoes'];
for (let obj in categories) {
	const link = `/api/get/product/` + categories[obj];
	console.log(link)
	app.get(link, (req, res) => {
		const sqlSelect = `SELECT PID, PName, Price, Stock, PDesc, Picture FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = ?`;
		db.query(sqlSelect,[categories[obj]],(err, result) => {
			res.send(result);
		});
	});
}

// app.get('/api/get/product/dresses', (req, res) => {
// 	const sqlSelect =
// 		"SELECT PID, PName, Price, Stock, PDesc FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = 'Dresses'";
// 	db.query(sqlSelect, (err, result) => {
// 		res.send(result)
// 	})
// })

// app.get('/api/get/product/pants', (req, res) => {
// 	const sqlSelect =
// 		"SELECT PID, PName, Price, Stock, PDesc FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = 'Pants'";
// 	db.query(sqlSelect, (err, result) => {
// 		res.send(result);
// 	});
// });

// app.get('/api/get/product/shirts', (req, res) => {
// 	const sqlSelect =
// 		"SELECT PID, PName, Price, Stock, PDesc FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = 'Shirts'";
// 	db.query(sqlSelect, (err, result) => {
// 		res.send(result);
// 	});
// });

// app.get('/api/get/product/shirts', (req, res) => {
// 	const sqlSelect =
// 		"SELECT PID, PName, Price, Stock, PDesc FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = 'Shirts'";
// 	db.query(sqlSelect, (err, result) => {
// 		res.send(result);
// 	});
// });

app.get('/api/get/product/shirts', (req, res) => {
	const sqlSelect =
		"SELECT PID, PName, Price, Stock, PDesc FROM product INNER JOIN category ON product.PCateID = category.cateID AND category.cate_name = 'Shirts'";
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.post('/api/insert', (req, res) => {
	const name = req.body.name;
	const password = req.body.password;
	const email = req.body.email;
	const tel = req.body.tel;
	const district = req.body.district;
	const city = req.body.city;
	const country = req.body.country;

	const sqlInsert =
		'INSERT INTO customer (CName, CPassword, CEmail, CMobile, District, City, Country) VALUES (?, ?, ?, ?, ?, ?, ?)';
	db.query(
		sqlInsert,
		[name, password, email, tel, district, city, country],
		(err, result) => {
			console.log(result);
		}
	);
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
