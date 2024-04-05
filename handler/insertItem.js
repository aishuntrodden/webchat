const {  insertItem } = require("../services/dbCalls");
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  event.timestamp = Date.now()
  event.chatId = uuidv4().toString()
  const data = await insertItem('chat',event);
  console.log('Added record:', data);

  const response = {
    statusCode: 200,
    body: data,
  };
  return response


};

