import express from "express";

const PORT = 300;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
