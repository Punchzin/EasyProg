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
query = "SELECT * FROM inputs"
cursor.execute(query)

# Fetch all rows from the result set
rows = cursor.fetchall()

# Print the table data
for row in rows:
    print(row)

# Close the cursor and connection
cursor.close()
conn.close()