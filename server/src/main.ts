import express from "express";

const PORT = process.env.API_PORT || 3001;

const app = express();

app.get("/", (_req, res) => {
  res.send("This is a test response from shaebae.blog's expressjs server.");
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "If you see this, the server is up!" });
});

app.get("/api/articles", (req, res) => {
  try {
    const requestType = req.query.requestType;
    // const pageName = req.query.pageName;
    if (requestType === "preview") {
      // make database request with pageName
      res.status(200).json({
        title: "Test Title.",
        thumbnail: "Fake picture",
        summary: "blah blah blah",
      });
    } else {
      res.status(400).json({
        error: "Invalid request type. Valid request types: preview",
      });
    }
  } catch (error) {
    console.log("Error retrieving article information:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Starting ExpressJS server on port ${PORT}...`);
});
