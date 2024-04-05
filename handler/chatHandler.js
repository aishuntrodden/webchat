exports.handler = async (event) => {
  try {
    const message = req.body;
    const chatData = {
      chatId: message.id,
      sender: "Web",
      message: message.text,
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
