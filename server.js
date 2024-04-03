
const express = require('express');
const app = express();
const lambdaRoutes = require('./routes/lambdaRoutes');

// Use the Lambda function routes
app.use('/lambda', lambdaRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});