const mysql = require('mysql');

const db = mysql.createConnection({
    host:"cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"easyprogefoda",
    database: "easyprog",
});

db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected");
})
