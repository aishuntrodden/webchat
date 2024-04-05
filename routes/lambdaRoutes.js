const express = require('express');
const router = express.Router();
const helloWorldHandler = require('../handler/lambda');

router.get('/invokeLambda', async (req, res) => {
    const event = {
        test: 'joker'
    };

    try {
        const response = await helloWorldHandler.handler(event);
        req.app.locals.logger.info('Response sent successfully by lambda.');
        res.status(response.statusCode).send(response.body);

    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
