import MySQL from "mysql";
import OpenAI from "openai";
const mysql = MySQL;
const APIKEY = "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";
const openai = new OpenAI({
  apiKey: APIKEY
});
const DATABASE_CONFIG = {
  host: "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "easyprogefoda",
  database: "easyprog",
};

// Define your incorrect code here:
let incorrectCode = `mylist = [1, 2, 3]\nmylist.push(4)`;

// MySQL connection
const db = mysql.createConnection(DATABASE_CONFIG);

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

const correctCode = async () => {
    try {
        const result = await openai.complete({
            engine: "text-davinci-003",
            prompt: "You will be provided with an incorrect code. Please correct it.\n\n" + incorrectCode,
            maxTokens: 761,
            temperature: 0.7,
            topP: 1.0,
            n: 1,
            stop: "\n"
        });

        const correctedCode = result.choices[0].text.trim();

        db.query(
            `INSERT INTO inputs (question, answer) VALUES (?, ?)`,
            [incorrectCode, correctedCode],
            (err, result) => {
                if (err) throw err;
                console.log("Code corrected and saved to database.");
            }
        );

    } catch (err) {
        console.error(err);
    }
};

correctCode();