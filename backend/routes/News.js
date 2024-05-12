// routes/news.js
const express = require('express');
const router = express.Router();
const News = require('../models/News');

// Route to create a new piece of news
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newNews = new News({ title, content });
  newNews.save()
    .then(news => {
      res.json(news);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to get all news
router.get('/', (req, res) => {
  News.find()
    .then(news => {
      res.json(news);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to get a single piece of news by ID
router.get('/:id', (req, res) => {
  News.findById(req.params.id)
    .then(news => {
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json(news);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Route to update a piece of news by ID
router.put('/:id', (req, res) => {
  News.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(news => {
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json(news);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

// Route to delete a piece of news by ID
router.delete('/:id', (req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then(news => {
      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }
      res.json({ message: 'News deleted successfully' });
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

module.exports = router;
