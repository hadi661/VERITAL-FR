// middleware/errorHandler.js

// Error handling middleware function
function errorHandler(err, req, res, next) {
    // Log the error for debugging
    console.error(err.stack);
  
    // Send an appropriate error response to the client
    res.status(500).json({ error: 'Internal server error' });
  }
  
  module.exports = errorHandler;
  