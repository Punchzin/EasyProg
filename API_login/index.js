require('dotenv').config()

const mysql = require('mysql2')

// Create the connection to the database
const connection = mysql.createConnection('mysql://a1q5daxmfcor6w5eyibq:pscale_pw_aJneHS4TiyGKJxW33gbZR9mMO16FrUxTnIQAQl2pKNb@aws.connect.psdb.cloud/bank_of_dades?ssl={"rejectUnauthorized":true}')

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

connection.end()
