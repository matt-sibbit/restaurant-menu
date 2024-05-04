require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/api');

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRoutes);

// connect to MongoDB - atlas - need .env file in backend root
const dbUri = process.env.DB_URI;
mongoose.connect(dbUri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

