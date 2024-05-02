require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB - atlas - need .env file in backend root
const dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// api routes
const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});