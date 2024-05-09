// Importing required modules
const express = require('express');
// Import Mongoose module
const mongoose = require('mongoose');

// Creating an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Define the Service schema
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
});

// Create the Service model
const Service = mongoose.model('Service', serviceSchema);

// Route to create a new service
app.post('/services', (req, res) => {
  const newService = new Service(req.body);
  newService.save()
    .then(service => {
      res.json(service);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to get all services
app.get('/services', (req, res) => {
  Service.find()
    .then(services => {
      res.json(services);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to get a single service by ID
app.get('/services/:id', (req, res) => {
  Service.findById(req.params.id)
    .then(service => {
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json(service);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to update a service by ID
app.put('/services/:id', (req, res) => {
  Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(service => {
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json(service);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to delete a service by ID
app.delete('/services/:id', (req, res) => {
  Service.findByIdAndDelete(req.params.id)
    .then(service => {
      if (!service) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json({ message: 'Service deleted successfully' });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/company_website', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  // Start the server after connecting to MongoDB
  const port = process.env.PORT || 5003;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
