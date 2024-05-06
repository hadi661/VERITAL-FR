const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Add sample services to the database
    await addSampleServices();
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
}

// Function to add sample services to the database
async function addSampleServices() {
  try {
    const db = client.db('company_website');
    await db.collection('services').insertMany([
      {
        title: 'Audit',
        description: 'Real-time handling of any situation and Propose areas for progress with the Assessment of the durability and adaptability of your installations Regulatory compliance...'
      },
      {
        title: 'Certification',
        description: 'Certification is the basis of the excellence of our services provided in terms of expertise in order to maintain relationships of trust, proximity with our clients, manage risks and stimulate performance...'
      },
      {
        title: 'INSPECTION',
        description: 'Linspection consiste à vérifier sur place quun produit, un actif ou un système répond aux critères spécifiés Linspection consiste à vérifier sur place qu un produit, un actif ou un système répond aux critères spécifiés...'
      },
      {
        title: 'CONSULTATION',
        description: 'Consultation personnalisée et recommandations dune organisation composée dexperts hautement qualifiés pour aider les entreprises à répondre aux exigences réglementaires.',
      },
      // Add more services as needed
    ]);
    console.log('Sample services added successfully');
  } catch (err) {
    console.error('Error adding sample services:', err);
  }
}
// Redirect requests from root path to /services
app.get('/', (req, res) => {
  res.redirect('/services');
});


// Function to retrieve services
app.get('/services', async (req, res) => {
  try {
    const db = client.db('company_website');
    const services = await db.collection('services').find().toArray();
    res.json(services);
  } catch (err) {
    console.error('Error retrieving services:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
async function startServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();
