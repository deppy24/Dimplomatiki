//Μysql server connection with client side

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const createError = require('http-errors');
const app = express();
app.use(cors());
app.use(express.json());

let router = express.Router();
let jwtSecret = 'your_jwt_secret';
const authenticateToken = require('./auth');

//Db connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sign_up',
	port: 3306,
	connectionLimit: 15,
	multipleStatements: true,
	namedPlaceholders: true,
});
db.connect((err) => {
	if (err) return err;
	console.log('Connected to MySQL database');
});

//Sign up form write data in sign_up table in mysql
app.post('/Signup', async (req, res) => {
	console.log(req.body);

	const { Name, Surname, Phone, Email, Password } = req.body;
	const sql = 'INSERT INTO sign_up (Name, Surname, Phone, Email, Password) VALUES (?, ?, ?, ?, ?)';
	db.query(sql, [Name, Surname, Phone, Email, Password], (err) => {
		if (err) {
			console.error('There has been an error during inserting the data');
			res.send(500, 'Error saving data');
		} else {
			console.log('Data saved successfully');
			res.send(200, 'Data saved successfully');
		}
	});
});

//Login
app.post('/Login', async (req, res) => {
	console.log(req.body);

	const { Email, Password } = req.body;
	try {
		const sql = 'SELECT * FROM sign_up WHERE  Email = ? AND Password = ?';
		db.query(sql, [Email, Password], (err, data) => {
			if (err) return res.json('Error');

			if (data.length > 0) {
				const token = jwt.sign({ Email }, jwtSecret, { expiresIn: '1h' });
				res.json({ token });
			} else {
				return res.send(401, 'Login error');
			}
		});
	} catch (error) {
		console.log(error);
		res.send(500, 'Σφάλμα κατά την ανάκτηση από την βάση δεδομένων.');
	}
});

app.get('/stream-data', authenticateToken, (req, res) => {
	const id = req.query.id;
	const jsonOriginal = JSON.parse(fs.readFileSync('./SCM_measurements.json', 'utf-8'));
	var jsonData = { ...jsonOriginal };
	const entriesCount = 6421;
	res.setHeader('Content-Type', 'application/json');
	let i = 0;

	getRandomFactor = (a) => {
		return 1 - a + Math.random() * a;
	};

	const interval = setInterval(() => {
		if (i < entriesCount) {
			if (id == 2) {
				// simulating a different stream
				const a = 0.2;
				jsonData[i + 1].value_ISO *= getRandomFactor(a);
				jsonData[i + 1].value_DEMO *= getRandomFactor(a);
				jsonData[i + 1].value_ACC *= getRandomFactor(a);
				jsonData[i + 1].value_P2P *= getRandomFactor(a);
				jsonData[i + 1].valueTEMP *= getRandomFactor(a);
			}
			res.write(JSON.stringify(jsonData[i + 1]) + '\n');
			i++;
		} else {
			i = 0;
			jsonData = { ...jsonOriginal };
		}
	}, 5000); // Adjust the interval as needed (1000ms = 1 second)

	req.on('close', () => {
		clearInterval(interval); // Clear interval if connection closes
		console.log('Client disconnected');
	});
});

app.listen(8081, () => {
	console.log('Server is listening');
});
