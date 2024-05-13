const express = require('express');
const mongoose = require('./dbs');
const newsRoutes = require('./routes/News');
const contactRoutes = require('./routes/Contact');
const divisionsRoutes = require('./routes/Divisions');
const servicesRoutes = require('./routes/services');
const errorHandler = require('./middleware/errorHandler'); // Import the error handling middleware
const bodyParser = require('body-parser'); // Example middleware for parsing request bodies

const app = express();
const port = process.env.PORT || 5010;

// Middleware setup
app.use(bodyParser.json()); // Parse JSON request bodies


// Routes setup
app.use('/news', newsRoutes); // Use the News routes
app.use('/contacts', contactRoutes); // Use the Contact routes
app.use('/divisions', divisionsRoutes); // Use the Divisions routes
app.use('/services', servicesRoutes); // Use the Services routes

// Register error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
