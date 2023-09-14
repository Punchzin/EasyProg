const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connection URL
const url = 'mongodb+srv://Punchzin:gabmeire12@cluster0.bqnixoy.mongodb.net/?retryWrites=true&w=majority';

// Database Name
const dbName = 'Cluster0';

// Middleware to parse JSON requests
app.use(express.json());

// User registration route
app.post('/register', (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({ error: 'Passwords do not match' });
    return;
  }

  // Connect to the MongoDB Atlas database
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    // Check if the user already exists
    usersCollection.findOne({ email }, (err, user) => {
      if (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ error: 'Internal server error' });
        client.close();
        return;
      }

      if (user) {
        res.status(400).json({ error: 'User already exists' });
        client.close();
        return;
      }

      // Create a new user document
      const newUser = { email, password };
      usersCollection.insertOne(newUser, (err) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.status(201).json({ message: 'User registered successfully' });
        }
        client.close();
      });
    });
  });
});

// User authentication route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Connect to the MongoDB Atlas database
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    // Find the user by email and password
    usersCollection.findOne({ email, password }, (err, user) => {
      if (err) {
        console.error('Error finding user:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (!user) {
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        res.status(200).json({ message: 'User authenticated successfully' });
      }
      client.close();
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});