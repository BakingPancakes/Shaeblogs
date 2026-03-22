import express from "express";

const PORT = process.env.API_PORT || 3001;

const app = express();

app.get("/", (_req, res) => {
  res.send("This is a test response from shaebae.blog's expressjs server.");
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "If you see this, the server is up!" });
});

app.listen(PORT, () => {
  console.log(`Starting ExpressJS server on ${PORT}...`);
});
