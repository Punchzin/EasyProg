import connection from "./temp.js";

const query = `CREATE TABLE login
                    (userID INT AUTO_INCREMENT, email text)`
connection.execute(query)