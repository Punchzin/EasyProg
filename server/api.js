const openai = require('openai');
const mysql = require('mysql');

openai.apiKey = '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';

const connection = mysql.createConnection({
    host:"cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"easyprogefoda",
    database: "easyprog",
});

connection.connect();

// Making the query for the input prompt
var inputId = 1; // Replace with the actual inputId
var db_query = "SELECT question FROM inputs WHERE inputId = ?";
connection.query(db_query, function (error, results, fields) {
    if (error) throw error;

    // Assuming the query result's first row and first column is your prompt
    let prompt = results[0][0];

    let systemMessage = {
        'role': 'system',
        'content': 'You will be provided with a piece of Python code, and your task is to find and fix bugs in it. And then explain the bugs.'
    };

    let userMessage = {
        'role': 'user',
        'content': prompt,
    };

    // Use this prompt to make an API call to OpenAI
    openai.ChatCompletion.create({
        'model': 'gpt-3',
        'messages': [systemMessage, userMessage],
        'temperature': 0.5,
        'maxTokens': 1024
    })
    .then(response => {
        // Extract the corrected code from the response
        let corrected_code = response['choices'][0]['message']['content'];
        console.log(corrected_code);
    })
    .catch(error => console.log(error));
});

connection.end();