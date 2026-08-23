const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const partnerRoutes = require('./routes/partner');
const donationRoutes = require('./routes/donations');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup to allow request from Next.js frontend
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Healthcheck endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    organization: 'ARISE COMMUNITY WELFARE ACCESS (ACWA)',
    location: 'Kakuma Refugee Camp, Turkana County, Kenya',
    timestamp: new Date().toISOString(),
  });
});

// Register API Routes
app.use('/api', contactRoutes);
app.use('/api', partnerRoutes);
app.use('/api', donationRoutes);

// Start Express server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`ACWA Backend Server running on http://localhost:${PORT}`);
  console.log(`Serving API routes for Contact, Partnership & Donations`);
  console.log(`==================================================`);
});
