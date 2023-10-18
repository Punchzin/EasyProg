import mysql.connector

config = {
  "host": "cluster.cdxnv8oe5mq3.sa-east-1.rds.amazonaws.com",
  "port": 3306,
  "user": "admin",
  "password": "easyprogefoda",
  "database": "easyprog"
}

# Connect to the MySQL database
conn = mysql.connector.connect(**config)

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Execute a SQL query to fetch data from the "inputs" table
query = '''CREATE TABLE codecorrections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codeuncorrected_id INT,
    correctedcode TEXT NOT NULL,
    FOREIGN KEY (codeuncorrected_id) REFERENCES codeuncorrected(id)
);'''
cursor.execute(query)
cursor.close()
conn.close()