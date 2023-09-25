import openai
import mysql.connector

# Database config
db_config = {
    "host": "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    "port": "3306",
    "user": "admin",
    "password": "easyprogefoda",
    "database": "easyprog"
}

# MySQL connection
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# OpenAI GPT-3.5-turbo API credentials
openai.api_key = "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"

# Function to correct Python code using OpenAI GPT-3.5-turbo API
def correct_python_code(code):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=code,
        temperature=0.6,
        max_tokens=100,
        top_p=1.0,
        n=1,
        stop=None,
    )
    corrected_code = response.choices[0].text.strip()
    return corrected_code

# Get the incorrect Python code from the user
incorrect_code = input("Enter the incorrect Python code:\n")

# Correct the Python code using OpenAI GPT-3.5-turbo API
corrected_code = correct_python_code(incorrect_code)

# Save the incorrect and corrected code to the database
query = "INSERT INTO inputs (question, answer) VALUES (%s, %s)"
values = (incorrect_code, corrected_code)
cursor.execute(query, values)
conn.commit()

# Display the corrected code
print("Corrected code:")
print(corrected_code)

# Close the MySQL connection
cursor.close()
conn.close()