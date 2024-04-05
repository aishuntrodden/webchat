const AWS = require("aws-sdk");
const awsConfig = require("../config/dynamodb");
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const createTable = async function (tableName='chat',res) {
    const params = {
        TableName: tableName,
        KeySchema: [
            { AttributeName: 'chatId', KeyType: 'HASH' } ,
            { AttributeName: 'timestamp', KeyType: 'RANGE' } ,
        ],
        AttributeDefinitions: [
            { AttributeName: 'chatId', AttributeType: 'S' }, // String
            { AttributeName: 'timestamp', AttributeType: 'N' }, // String
            // { AttributeName: 'sender', AttributeType: 'S' }, // String
            // { AttributeName: 'message', AttributeType: 'S' } // String

        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 50,  // Adjust these values as per your requirements
            WriteCapacityUnits: 50
        }
    };

//   Create the table
  dynamodb.createTable(params, (err, data) => {
    try {

      console.log("Table created successfully:", data);
      return data;
    }
    catch(err){
        console.error("Error creating tables:", err);
        res.status(500).send('Internal Server Error');

    }
  });
};

const listAllTables = async function () {
  try {
    // List tables
    const data = await dynamodb.listTables().promise();
    return data.TableNames;
  } catch (err) {
    console.error("Error listing tables:", err);
    throw err; // Rethrow the error for handling elsewhere
  }
};
const insertItem = async function(tableName,item){
    try {
        const params = {
            TableName: tableName,
            Item: item
        };
       const data = await docClient.put(params).promise();
       console.log(data)
       return data;
    } catch (error) {
        console.error('Error saving chat data:', error);
        throw error;
    }
}

const listAllItems = async function(tableName){
    docClient.scan(params, (err, data) => {
        if (err) {
            console.error('Error listing items:', err);
        } else {
            console.log('Items in the table:', data.Items);
        }
    });
}
module.exports = { createTable, listAllTables,insertItem,listAllItems };
