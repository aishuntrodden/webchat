exports.handler = async (event) => {
  try {
    const message = event.body;
    const chatData = {
      chatId: message.id,
      sender: "Web",
      message: message.text,
      timestamp: Date.now()
    };
    await saveChatData(chatData);

    return {
      statusCode: 200,
      body: "Message processed successfully",
    };
  } catch (error) {
    console.error("Error processing incoming message:", error);
    res.status(500).send("Internal Server Error");
  }
};

const saveChatData = async function (data){
  try {
    const data = await docClient.put(params).promise();
    console.log('Item saved successfully:', data);
    return data; // Return the saved item
} catch (err) {
    console.error('Error saving item:', err);
    throw err; // Throw the error for handling in the caller function
}
}