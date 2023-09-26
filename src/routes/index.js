const router = require('express').Router();
const path = require('path');
// const mysql = require('mysql2'); // Import the MySQL library

// // Create a MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root', 
//   password: 'rootpass', 
//   database: 'user_db', 
//   // email: 'email',
//   // user_id: 'user_id',
// });

// // Connect to the MySQL database
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ' + err.stack);
//   } else {
//     console.log('Connected to MySQL as id ' + db.threadId);
//   }
// });

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../webpage/login/login.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../webpage/register/register.html'));
});

router.get('/category', (req, res) => {
  res.sendFile(path.join(__dirname, '../webpage/category/category.html'));
});

router.get('/quizzes/javascript', (req, res) => {
  res.sendFile(path.join(__dirname, '../webpage/quizzes//javascript/javascript.html'));
});

// Example route to handle storing data in the database
router.post('/store-data', (req, res) => {
  const { name, email } = req.body; // Assuming you're sending name and email via POST request

  // Insert data into the database
  const sql = 'INSERT INTO mytable (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error('Error storing data: ' + err);
      res.status(500).send('Error storing data');
    } else {
      console.log('Data stored successfully');
      res.status(200).send('Data stored successfully');
    }
  });
});

module.exports = router;