from flask import Flask, request, jsonify
import openai
import mysql.connector
import flask.py

# OpenAI GPT-3.5-turbo API credentials
openai.api_key = "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"
# Database config
db_config = {
            "host": "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
            "port": "3306",
            "user": "admin",
            "password": "easyprogefoda",
            "database": "easyprog"
    }

# Function to correct Python code using OpenAI GPT-3.5-turbo API
def correct_python_code(incorrect_code):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt= "correct the following python code: " incorrect_code,
        temperature=0.6,
        max_tokens=600,
        top_p=1.0,
        n=1,
        stop=None,
    )
correct_python_code()

corrected_code = response.choices[0].text.strip()
return corrected_code
print(corrected_code)

# MySQL connection
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# Correct the Python code using OpenAI GPT-3.5-turbo API
corrected_code = main.correct_python_code(incorrect_code)

 # Save the incorrect and corrected code to the database
query = "INSERT INTO inputs (question, answer) VALUES (%s, %s)"
values = (incorrect_code, corrected_code)
cursor.execute(query, values)
conn.commit()

# Close the MySQL connection 
cursor.close()
conn.close()
return print("code corrected")