const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'DataCode API is running',
    version: '1.0.0',
    author: 'Bhargav Chirumamilla'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API routes
app.get('/api/problems', (req, res) => {
  // TODO: Implement ML problems endpoint
  res.json({
    problems: [
      {
        id: 1,
        title: 'Linear Regression Implementation',
        difficulty: 'Easy',
        category: 'ML Fundamentals',
        description: 'Implement linear regression from scratch'
      },
      {
        id: 2,
        title: 'Neural Network Backpropagation',
        difficulty: 'Medium',
        category: 'Deep Learning',
        description: 'Implement backpropagation algorithm'
      }
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`DataCode server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
}); 