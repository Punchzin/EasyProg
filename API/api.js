import { Configuration, OpenAIApi } from "openai";
import mysql from 'mysql';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

// create the database connection
const connection = mysql.createConnection({
    host: "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "easyprogefoda",
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
const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "Use your ability to analyze images to accept an image URL, and then assist the user with their prompt.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
.then(response => {
    // Extract the corrected code from the response
    let corrected_code = response['choices'][0]['message']['content'];
    
    const insertQuery = `INSERT INTO inputs (answer, question) VALUES (?, ?)`;
    
    connection.query(insertQuery, [corrected_code, prompt], function(error, results) {
        if (error) throw error;
        
        // The corrected_code has been successfully added to the database
        console.log(corrected_code);
        // Close the connection within the callback to ensure it is closed after work is done
        connection.end(); 
    });
})
.catch(error => console.log(error));