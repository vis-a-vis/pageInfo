const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'page_info'
})

connection.connect((err) => {
  if (err) {
    console.log('problem connecting to mysql', err);
    return;
  }
  console.log('connected to mysql!');
});

module.exports = connection;