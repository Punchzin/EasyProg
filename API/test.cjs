const mysql = require('mysql');
const OpenAI = require('openai');

const openai = new OpenAI({apiKey: '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'}); // Initialize an instance of OpenAI with your API key

const DATABASE_CONFIG = {
  host: "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "easyprogefoda",
  database: "easyprog",
};

// Define your incorrect code here:
let incorrectCode = `class Person:
def __init__(self, name, age)
    self.name = name
    self.age = age

def print_info(self):
    print(f"Name: {self.name}, Age: {self.age}")

p = Person("John", 25)
p.print_info()`;

// MySQL connection
const db = mysql.createConnection(DATABASE_CONFIG);

db.connect((err) => {
    if(err) throw err;
    console.log('MySQL connected...');
});

const correctCode = async () => {
  try {
    const result = await openai.completionChat.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You will be provided with an incorrect code. Please correct it."
          },
          {
            "role": "user",
            "content": incorrectCode
          },
        ]
    });

    const correctedCode = result.choices[0].finish.reason.strip();

    db.query(`
        INSERT INTO inputs (question, answer)
        VALUES (?, ?)
    `,
    [incorrectCode, correctedCode],
    (err, result) => {
      if (err) throw err;
      console.log("Code corrected and saved to database.");
    });

  } catch (err) {
    console.error(err);
  }
};

correctCode();