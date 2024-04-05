
const express = require('express');
const logger = require('./logger/loggingService')
const app = express();

const lambdaRoutes = require('./routes/lambdaRoutes');

app.locals.logger = logger;

// Use the Lambda function routes
app.use('/lambda', lambdaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});