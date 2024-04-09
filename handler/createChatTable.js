const { createTable } = require("../services/dbCalls");
exports.handler = async (event) => {
  console.log('Received event:CreateTable');
  const tables = await createTable();
  console.log('Table created successfully', tables);

  const response = {
    statusCode: 200,
    body: tables,
  };

  return response

};








