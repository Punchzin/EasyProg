const openai = require('openai');
const mysql = require('mysql');

openai.apiKey = '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';
// create the database connection
const connection = mysql.createConnection({
    host:"cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin",
    password:"easyprogefoda",
    database: "easyprog",
});

connection.connect();

    var prompt = `class Person:
    def __init__(self, name, age)
        self.name = name
        self.age = age

    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

p = Person("John", 25)
p.print_info()`;

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
        'model': 'gpt-4',
        'messages': [systemMessage, userMessage],
        'temperature': 0.5,
        'maxTokens': 1024
    })
    .then(response => {
        // Extract the corrected code from the response
        let corrected_code = response['choices'][0]['message']['content'];
        
        const insertQuery = `INSERT INTO inputs (answer, question) VALUES (?)`;
        connection.query(insertQuery, [corrected_code], [prompt], function(error, results, fields) {
            if (error) throw error;
            // The corrected_code has been successfully added to the database    
        });

        console.log(corrected_code);
    })
    .catch(error => console.log(error));

connection.end();