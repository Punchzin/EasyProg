import openai
import mysql.connector
from mysql.connector import Error

# Set API key (Replace 'openai-api-key' with your actual key)
openai.api_key = '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'

# Database configurations
db_config = {
    "host": "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
    "port": "3306",
    "user": "admin",
    "password": "easyprogefoda",
    "database": "easyprog",
}

def correct_code(incorrected_code, engine="text-davinci-001"):
    try:
        prompt = f"""
        The following Python code contains an error:

        {incorrected_code}

        Please correct it and explain the error.
        """

        response = openai.Completion.create(
            engine=engine,
            prompt=prompt,
            temperature=0.5,
            max_tokens=500
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return str(e)

def read_incorrected_code_from_db():
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            cursor = connection.cursor()
            query = "SELECT incorrectedcode FROM codeuncorrected LIMIT 1"
            cursor.execute(query)
            result = cursor.fetchall()
            if result:
                return result[0][0]
            else:
                return None
    except mysql.connector.Error as error:
        print("Failed to read from MySQL table due to error: {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

def write_to_database(corrected_code):
    try:
        connection = mysql.connector.connect(**db_config)
        if connection.is_connected():
            cursor = connection.cursor()
            query = "INSERT INTO codecorrections (correctedcode) VALUES (%s)"
            cursor.execute(query, (corrected_code, ))
            connection.commit()
            print("Corrected code successfully written to the database!")
    except mysql.connector.Error as error:
        print("Failed to insert into MySQL table due to error: {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()

# Read incorrect code from database, correct it and write the corrected code back to database
incorrected_code = read_incorrected_code_from_db()
if incorrected_code:
    corrected_code = correct_code(incorrected_code)
    write_to_database(corrected_code)
else:
    print("No incorrect code found in the database.")