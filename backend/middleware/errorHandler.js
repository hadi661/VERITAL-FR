const errorHandler = (err, req, res, next) => {
    // Log the error to the console
    console.error(err.stack);
    
    // Check if the error is a known error with a status code
    if (err.statusCode) {
      // Send a response with the status code and error message
      res.status(err.statusCode).json({ error: err.message });
    } else {
      // If the error is unknown, send a generic 500 status code and error message
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = errorHandler;
  