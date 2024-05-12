// controllers/NewsController.js

const News = require('../models/News');

// Controller function to create a new piece of news
exports.createNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNews = new News({ title, content });
    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single piece of news by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a piece of news by ID
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to delete a piece of news by ID
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      return res.status(404).json({ error: 'News not found' });
    }
    res.json({ message: 'News deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
