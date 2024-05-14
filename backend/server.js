const express = require('express');
const path = require('path'); // Import the path module
const mongoose = require('./dbs');
const newsRoutes = require('./routes/News');
const contactRoutes = require('./routes/Contact');
const divisionsRoutes = require('./routes/Divisions');
const servicesRoutes = require('./routes/services');
const teamRoutes = require('./routes/teamRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const errorHandler = require('./middleware/errorHandler'); // Import the errorHandler middleware

const app = express();
const port = process.env.PORT || 5010;

// Middleware setup
app.use(bodyParser.json()); // Parse JSON request bodies

// Serve static files from the templates directory
app.use(express.static(path.join(__dirname, 'templates')));

// Routes setup
app.use('/news', newsRoutes); // Use the News routes
app.use('/contacts', contactRoutes); // Use the Contact routes
app.use('/divisions', divisionsRoutes); // Use the Divisions routes
app.use('/services', servicesRoutes); // Use the Services routes
app.use('/team', teamRoutes); // Use the Team routes
app.use('/testimonials', testimonialsRoutes); // Use the Testimonials routes

// Register error handling middleware
app.use(errorHandler); // Use the errorHandler middleware

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
