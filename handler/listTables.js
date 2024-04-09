const {  listAllTables, listAllItems } = require("../services/dbCalls");
exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  const tables = await listAllTables();
  console.log('List of tables:', tables);

  const response = {
    statusCode: 200,
    body: tables,
  };
  return response
};

exports.handlerListAllItems = async (event) => {
  const data = await listAllItems(event);
  console.log('List of items:', data);

  const response = {
    statusCode: 200,
    body: data,
  };
  return response
};








