// index.js
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Apply global logging middleware
app.use(logger);

// Root route to display a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Express Assignment API!');
});

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Mount routes for users and products
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Global error-handling middleware for unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
