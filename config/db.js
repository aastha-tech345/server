require("dotenv").config();

const startServer = async () => {
  try {
    await startDatabase();
    app.listen(port, (req, res) => {
      console.log("server start" + port);
    });
  } catch (error) {
    console.log("error", error);
  }
};

startServer();
