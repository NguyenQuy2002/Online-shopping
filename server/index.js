const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// const db = mysql.createPool({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '123456',
// 	database: 'ams2',
// });

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'Phuquy15022002',
	database: 'ams2',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var CustomerID = 1;
var InventId = 1;

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
	const sqlSelect = `CALL select_feature_product`;
	db.query(sqlSelect, (err, result) => {
		res.send(result[0]);
	});
});

app.post('/api/post/login/admin', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const sqlSelect = 'SELECT is_id FROM invent_manage WHERE is_email = ? AND is_password = ?';
	db.query(sqlSelect, [email, password], (err, result) => {
		if (err) console.log(err)
		else if (result.length > 0) {
			res.send(result)
			InventId = result[0].is_id
		}
		else res.send('Incorrect username or password')
	})
})

app.post('/api/post/login/customer', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const sqlSelect = 'SELECT c_id FROM customer WHERE c_email = ? AND password = ?';
	db.query(sqlSelect, [email, password], (err, result) => {
		if (err) console.log(err);
		else if (result.length > 0) {
			res.send(result);
			CustomerID = result[0].c_id;
		} else res.send('Incorrect username or password');
	});
});

app.get('/api/get/cart', (req, res) => {
	const sqlSelect = 'CALL display_cart_list';
	db.query(sqlSelect, (err, result) => {
		res.send(result[0]);
	});
});

app.get('/api/get/customercare', (req, res) => {
	const sqlSelect = 'SELECT hotline FROM support WHERE sup_cid = ?';
	db.query(sqlSelect, [CustomerID], (err, result) => {
		res.send(result[0]);
	});
});

app.get('/api/get/account', (req, res) => {
	const sqlSelect = 'SELECT * FROM customer WHERE c_id = ?';
	db.query(sqlSelect, [CustomerID], (err, result) => {
		res.send(result[0]);
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
	db.query(sqlInsert, [name, password, tel, email, district, city, country], (err, result) => {
		if (err) console.log(err);
		console.log(result);
	});
});

app.post('/api/post/detail', (req, res) => {
	const add_OrId = req.body.add_OrId;
	const add_PId = req.body.add_PId;
	const add_quantity = req.body.add_quantity;
	console.log(add_OrId, add_PId, add_quantity);
	const sqlInsert = 'INSERT INTO add_to (add_OrId, add_PId, add_quantity) VALUES (?, ?, ?)';
	db.query(sqlInsert, [add_OrId, add_PId, add_quantity], (err, result) => {
		if (err) console.log(err);
		console.log(result);
	});
});

app.post('/api/insert/product', (req, res) => {
	const p_name = req.body.name;
	const picture = req.body.picture;
	const p_desc = req.body.desc;
	const price = req.body.price;
	const stock = req.body.stock;
	const cate_id = req.body.category
	const sqlInsert = 'INSERT INTO product (inventory_id, p_name, picture, p_desc, price, stock, p_cate_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
	db.query(sqlInsert, [InventId, p_name, picture, p_desc, price, stock, cate_id], (err, result) => {
		if (err) console.log(err);
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
		const sqlInsert = 'INSERT INTO invent_manage (is_name, is_password, is_email) VALUES (?, ?, ?)';
		db.query(sqlInsert, [name, password, email], (err, result) => {
			console.log(result);
		});
	} else if (role == 2) {
		const sqlInsert = 'INSERT INTO customer (c_name, password, c_email) VALUES (?, ?, ?)';
		db.query(sqlInsert, [name, password, email], (err, result) => {
			if (err) console.log(err);
			console.log(result);
		});
	}
});

app.put('/api/update/product', (req, res) => {
	const p_id = req.body.id;
	const p_name = req.body.name;
	const picture = req.body.picture;
	const p_desc = req.body.desc;
	const price = req.body.price;
	const stock = req.body.stock;
	const category = req.body.category
	const sqlUpdate = 'UPDATE product SET inventory_id = ?, p_name = ?, picture = ?, p_desc = ?, price = ?, stock = ?, p_cate_id = ? WHERE p_id = ?';
	db.query(sqlUpdate, [InventId, p_name, picture, p_desc, price, stock, category, p_id], (err, result) => {
		if (err) console.log(err);
		console.log(result);
	});
});

app.put('/api/update/account', (req, res) => {
	const c_id = req.body.id;
	const c_name = req.body.name;
	const password = req.body.password;
	const c_email = req.body.email;
	const c_address = req.body.address;
	const c_mobile = req.body.mobile;
	const district = req.body.district;
	const city = req.body.city;
	const country = req.body.country;
	const sqlUpdate =
		'UPDATE customer SET c_name = ?, password = ?, c_email = ?, c_address = ?, c_mobile = ?, district = ?, city = ?, country = ? WHERE c_id = ?';
	db.query(
		sqlUpdate,
		[c_name, password, c_email, c_address, c_mobile, district, city, country, c_id],
		(err, result) => {
			console.log(sqlUpdate);
			if (err) console.log(err);
			console.log(result);
		}
	);
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
