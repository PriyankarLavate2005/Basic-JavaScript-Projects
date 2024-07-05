const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',    // Replace with your MySQL host (usually 'localhost')
  user: 'root', // Replace with your MySQL username
  password: 'Plavate@1234', // Replace with your MySQL password
  database: 'company'   // Replace with your database name
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB');
    throw error;
  }
  console.log('Connected to the database.');
  
  // Optional: Query the database to test the connection
  connection.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      console.error('An error occurred while executing the query');
      throw error;
    }
    console.log('Data received from Db:');
    console.log(results);

    // Close the connection
    connection.end(error => {
      if (error) {
        console.error('An error occurred while closing the connection');
        throw error;
      }
      console.log('Connection closed.');
    });
  });
});

