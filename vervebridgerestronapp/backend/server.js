const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const JWT_SECRET = 'mohan';

app.use(cors())


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/restron', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User schema and model with role
const userSchema = new mongoose.Schema({
  username: String,
  email: String,  // Added email field
  password: String,
  role: { type: String, default: 'user' },  // Default role is user
});

const User = mongoose.model('User', userSchema, 'user');

// User Authentication
const authenticateToken = (request, response, next) => {
  const token = request.headers['authorization'];

  if (!token) return response.status(401).json({ error: 'Access Denied' });
  jwt.verify(token, JWT_SECRET, async (error, user) => {
    if (error) return response.status(403).json({ error: 'Invalid token' });

    try {
      const loggedInUser = await User.findById(user.userId).select('-password');
      request.user = loggedInUser;
      next();
    } catch (error) {
      response.status(500).json({ error: 'Failed to fetch user details' });
    }
  });
};

app.get('/api/user/details', authenticateToken, (req, res) => {
  res.json(req.user);
});

// Register Route
app.post('/api/user/register', async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const existingUser = await User.findOne({ username });

      if (existingUser) {
          return res.status(400).json({ error: 'Username already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
  }
});

// Login Route
app.post('/api/user/login', async (req, res) => {
  try {
      const { identifier, password } = req.body; // identifier can be username or email
      const user = await User.findOne({
          $or: [{ email: identifier }, { username: identifier }],
      });

      if (!user) {
          return res.status(400).json({ error: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(400).json({ error: 'Please check the password!' });
      }

      const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET);
      res.json({ token, role: user.role }); // Return role along with token
  } catch (error) {
      res.status(500).json({ error: 'Login failed' });
  }
});

app.get("/", (req, res)=> res.json({message: "HI NIthin"}))

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
