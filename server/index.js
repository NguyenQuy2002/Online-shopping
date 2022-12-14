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
	database: 'ams2',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

categories = ['Dresses', 'Pants', 'Shirts', 'Hats', 'Shoes'];
for (let obj in categories) {
	const link = `/api/get/product/` + categories[obj];
	app.get(link, (req, res) => {
		const sqlSelect = `CALL select_category_products(?)`;
		db.query(sqlSelect, [categories[obj]], (err, result) => {
			res.send(result[0]);
		});
	});
}

app.get('/api/get/product/features', (req, res) => {
	const sqlSelect = `SELECT p_id, p_name, price, stock, p_desc, picture FROM product ORDER BY stock DESC LIMIT 8`;
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.get('/api/login/customer', (req, res) => {
	const sqlSelect = `SELECT c_email, password FROM customer`;
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.get('/api/login/admin', (req, res) => {
	const sqlSelect = `SELECT is_email, is_password FROM invent_manage`;
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.get('/api/get/cart', (req, res) => {
	const sqlSelect = `SELECT p.p_id, p.picture, p.p_name, p.price, a.add_quantity 
	FROM product p, add_to a 
	WHERE p.p_id = a.add_PId 
	AND a.add_OrId = '1' 
	ORDER BY p.p_id `;
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.get('/api/get/all', (req, res) => {
	const sqlSelect = `CALL select_all_product`;
	db.query(sqlSelect, (err, result) => {
		res.send(result[0]);
	});
});

app.post('/api/post/account', (req, res) => {
	const name = req.body.name;
	const password = req.body.password;
	const email = req.body.email;
	const tel = req.body.tel;
	const district = req.body.district;
	const city = req.body.city;
	const country = req.body.country;

	const sqlInsert =
		'INSERT INTO customer (c_name, password, c_mobile, c_email, district, city, country) VALUES (?, ?, ?, ?, ?, ?, ?)';
	db.query(
		sqlInsert,
		[name, password, tel, email, district, city, country],
		(err, result) => {
			console.log(result);
		}
	);
});

app.post('/api/post/detail', (req, res) => {
	const add_OrId = req.body.add_OrId;
	const add_PId = req.body.add_PId;
	const add_quantity = req.body.add_quantity;
	console.log(add_OrId, add_PId, add_quantity);
	const sqlInsert =
		'INSERT INTO add_to (add_OrId, add_PId, add_quantity) VALUES (?, ?, ?)';
	db.query(sqlInsert, [add_OrId, add_PId, add_quantity], (err, result) => {
		console.log(result);
	});
});

app.post('/api/signup', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	const role = req.body.role;
	console.log(role);
	if (role == 1) {
		const sqlInsert =
			'INSERT INTO invent_manage (is_name, is_password, is_email) VALUES (?, ?, ?)';
		db.query(sqlInsert, [name, password, email], (err, result) => {
			console.log(result);
		});
	} else if (role == 2) {
		const sqlInsert =
			'INSERT INTO customer (c_name, password, c_email) VALUES (?, ?, ?)';
		db.query(sqlInsert, [name, password, email], (err, result) => {
			console.log(result);
		});
	}
});


app.put('/api/update/product', (req, res) => {
	const p_id = req.body.id
	const p_name = req.body.name
	const picture = req.body.picture;
	const p_desc = req.body.desc;
	const price = req.body.price;
	const stock = req.body.stock;
	const sqlUpdate = 'UPDATE product SET p_name = ?, picture = ?, p_desc = ?, price = ?, stock = ? WHERE p_id = ?';
	db.query(sqlUpdate, [p_name, picture, p_desc, price, stock, p_id], (err, result) => {
		if (err) console.log(err);
		console.log(result);
	});
});

app.delete('/api/delete/cart', (req, res) => {
	const sqlDelete = 'DELETE FROM add_to WHERE add_OrId = 1';
	db.query(sqlDelete, (err, result) => {
		if (err) console.log(err);

		console.log(result);
	});
});

app.delete('/api/delete/order_items', (req, res) => {
	const p_id = req.body.item.id;
	const sqlDelete = 'DELETE FROM add_to WHERE add_PId = ?';
	db.query(sqlDelete, [p_id], (err, result) => {
		if (err) console.log(err);

		console.log(result);
	});
});

app.delete('/api/delete/products', (req, res) => {
	const p_id = req.body.item.id;
	const sqlDelete = 'DELETE FROM product WHERE p_id = ?';
	db.query(sqlDelete, [p_id], (err, result) => {
		if (err) console.log(err);

		console.log(result);
	});
});

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
