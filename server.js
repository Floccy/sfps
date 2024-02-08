// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'contacts'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});

app.get('/contacts', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/contacts/:id', (req, res) => {
  db.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

app.post('/contacts', (req, res) => {
  const { name, phone, email, address } = req.body;
  db.query('INSERT INTO contacts (name, phone, email, address) VALUES (?, ?, ?, ?)', [name, phone, email, address], (err, result) => {
    if (err) throw err;
    res.send({ id: result.insertId, ...req.body });
  });
});

app.put('/contacts/:id', (req, res) => {
  const { name, phone, email, address } = req.body;
  db.query('UPDATE contacts SET name = ?, phone = ?, email = ?, address = ? WHERE id = ?', [name, phone, email, address, req.params.id], (err, result) => {
    if (err) throw err;
    res.send(req.body);
  });
});

app.delete('/contacts/:id', (req, res) => {
  db.query('DELETE FROM contacts WHERE id = ?', [req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ id: req.params.id });
  });
});

app.get('/search', (req, res) => {
  db.query('SELECT * FROM contacts WHERE name LIKE ?', [`%${req.query.name}%`], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(8080, () => console.log('Server started on port 8080'));
