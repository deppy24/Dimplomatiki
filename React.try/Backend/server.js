//Μysql server connection with client side 

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const createError = require('http-errors');
const app = express();
app.use(cors());
app.use(express.json());
let router = express.Router();

//Db connection
const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    database: "sign_up",
    port: 3306,
    connectionLimit: 15,
    multipleStatements: true,
    namedPlaceholders: true
});
db.connect((err) => {
    if (err) return err;
    console.log("Connected to MySQL database");
});

//POST request
/*app.post('/Signup', async (req, res) => {
    let Name = req.body.Name;
    let Surname = req.body.Surname
    let Email = req.body.Email;
    let Phone = req.body.Phone;
    let statement = 'INSERT INTO sign_up(Name, Surname, Phone, Email, Password) VALUES (?,?,?,?,?)'
    let values = [Name,Surname,Phone,Email,Password]
    try {
        await db.execute(statement, values)
        console.log('Νέος πελάτης εισήχθει με επιτυχία.')
        res.status(200)
        res.send('Ο πελάτης εισήχθει με επιτυχία.')
    } catch (error) {
        console.log("New user did not entered the db")
        res.status(500)
        res.send('Σφάλμα κατά την εισαγωγή στην βάση δεδομένων.')
    }
})*/

//Sign up form write data in sign_up table in mysql
app.post('/Signup', async (req, res) => {
    res.send(200)
    const { Name, Surname, Phone, Email, Password } = req.body;
    const sql = 'INSERT INTO sign_up (Name, Surname, Phone, Email, Password) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [Name, Surname, Phone, Email, Password], (err) => {
    console.log(req.body)
        if (err) {
            console.error("There has been an error during inserting the data");
            res.status(500).send("Error saving data");
        } else {
            console.log("Data saved successfully")
            res.status(201).send("Data saved successfully");
        }
    });
});

//Login form matches the data from sign_up table
/*app.post('/', async(res,req) => {
    res.send(200)
    const sql = "SELECT * FROM sign_up WHERE email = ? AND password = ?";
    const {Email, Password } = req.body;

    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        console.log(req.body)
        if(err) return res.json("Error");
        if (data.length>0){
            return res.json("Login Successfully")
        }else{
            return res.json("Login error")
        }
    })
})*/

//Login
app.post('/Login', async (req, res) => {
    const {Email, Password } = req.body;
    try {
        const sql = "SELECT * FROM sign_up WHERE  Email = ? AND Password = ?"
        db.query(sql,[req.body.Email,req.body.Password],(err,data)=>{
            console.log(req.body)
            if(err) return res.json("Error");
            if (data.length>0){
                return res.json("Login Successfully")
            }else{
                return res.json("Login error")
            }
        })
    } catch (error) {
       
        console.log(error)
        res.status(500)
        res.send('Σφάλμα κατά την ανάκτηση από την βάση δεδομένων.')
    }
})



app.listen(8081, () =>{
    console.log("Server is listening");
})
