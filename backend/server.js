const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const empmodel = require('./emp');

const app = express();
app.use(express.json());
app.use(cors());
const mongoURI = 'mongodb://localhost:27017/Nursery';

mongoose.connect(mongoURI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  empmodel.findOne({ username: username })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      if (user.password === password) {
        console.log(username, password);
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    })
    .catch(err => {
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.post('/users', (req, res) => {
  empmodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getusers', async (req, res) => {
  const { username } = req.query;

  try {
    if (!username) {
      return res.status(400).json({ message: 'Username parameter is required.' });
    }

    const users = await empmodel.find({ username: username });

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

const port = process.env.PORT || 2000;

const message = 'Hello from your Express.js server!';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
