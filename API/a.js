const mysql = require('mysql');
const OpenAI = require('openai');

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: 'YOUR_OPENAI_API_KEY'
});

// Configure MySQL database connection
const db = mysql.createConnection({
  host: 'cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'easyprogefoda',
  database: 'easyprog'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// Function to correct code using GPT-3.5-turbo
async function correctCode(code) {
  const response = await openai.complete({
    engine: 'gpt-3.5-turbo',
    prompt: `Fix the following Python code:\n\n${code}`,
    maxTokens: 100,
    temperature: 0.7,
    topP: 1.0,
    n: 1,
    stop: '\n'
  });

  return response.choices[0].text.trim();
}

// Example incorrect code
const incorrectCode = `def add(a, b)
  return a + b`;

// Correct the code using GPT-3.5-turbo
correctCode(incorrectCode)
  .then((correctedCode) => {
    console.log('Incorrect code:', incorrectCode);
    console.log('Corrected code:', correctedCode);

    // Store the incorrect and corrected code in the database
    const sql = `INSERT INTO inputs (question, answer) VALUES (?, ?)`;
    const values = [incorrectCode, correctedCode];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error storing code correction:', err);
        return;
      }
      console.log('Code correction stored in database!');
    });
  })
  .catch((error) => {
    console.error('Error correcting code:', error);
  });