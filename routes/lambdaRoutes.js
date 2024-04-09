const express = require('express');
const router = express.Router();
const createChatTable = require('../handler/createChatTable');
const listTables = require('../handler/listTables');
const insertItem = require('../handler/insertItem');
router.get('/listTables', async (req, res) => {
    const event = {
        test: 'joker'
    };

    try {
        const response = await listTables.handler(event);
        req.app.locals.logger.info('Response sent successfully by lambda.');
        res.status(response.statusCode).send(response.body);

    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/createChatTable', async (req, res) => {

    try {
        const response = await createChatTable.handler();
        req.app.locals.logger.info('Response sent successfully by lambda.');
        res.status(response.statusCode).send(response.body);

    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/addChatItem', async (req, res) => {

    try {
        console.log(req.body)
        const response = await insertItem.handler(req.body);
        req.app.locals.logger.info('Response sent successfully by lambda.');
        res.status(response.statusCode).send(response.body);

    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/listAllItems', async (req, res) => {

    try {
        console.log(req.body)
        const response = await listTables.handlerListAllItems(req.body);
        req.app.locals.logger.info('Response sent successfully by lambda.');
        res.status(response.statusCode).send(response.body);

    } catch (error) {
        console.error('Error invoking Lambda function:', error);
        res.status(500).send('Internal Server Error');
    }
});



module.exports = router;
