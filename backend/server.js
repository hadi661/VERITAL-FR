// server.js

const express = require('express');
const mongoose = require('./dbs');
const Division = require('./models/Division'); // Import the Division model
const newsRoutes = require('./routes/News');
const contactRoutes = require('./routes/Contact');
const Service = require('./models/Service');

const app = express();
const port = process.env.PORT || 5010;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Route to create a new division
app.post('/divisions', (req, res) => {
  const newDivision = new Division(req.body);
  newDivision.save()
    .then(division => {
      res.json(division);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to get all divisions
app.get('/divisions', (req, res) => {
  Division.find()
    .then(divisions => {
      res.json(divisions);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to get a single division by ID
app.get('/divisions/:id', (req, res) => {
  Division.findById(req.params.id)
    .then(division => {
      if (!division) {
        return res.status(404).json({ error: 'Division not found' });
      }
      res.json(division);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to update a division by ID
app.put('/divisions/:id', (req, res) => {
  Division.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(division => {
      if (!division) {
        return res.status(404).json({ error: 'Division not found' });
      }
      res.json(division);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to delete a division by ID
app.delete('/divisions/:id', (req, res) => {
  Division.findByIdAndDelete(req.params.id)
    .then(division => {
      if (!division) {
        return res.status(404).json({ error: 'Division not found' });
      }
      res.json({ message: 'Division deleted successfully' });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

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

// Use the News routes
app.use('/news', newsRoutes);

// Use the Contact routes
app.use('/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
