const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"easyprogefoda",
    database: "easyprog",
});

connection.connect(function(err) {
    if (err) {
        console.error('An error occurred while connecting to the DB: ' + err.stack);
        return;
    }

    console.log('Connected to the database as id ' + connection.threadId);
});