const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect DB and call connect db
connectDB();

// init Middleware
app.use(express.json({ extended: false }));

// Index
app.get('/', (req, res) => {
  return res.json({ msg: 'Welcome to the Contact kepper API...' });
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
