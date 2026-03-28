import express from "express";
// import { ArticleData } from "../../client/types";
import { getArticleSummary } from "./prismaCalls.js";

const PORT = process.env.API_PORT || 3001;

const app = express();

app.get("/", (_req, res) => {
  res.send("This is a test response from shaebae.blog's expressjs server.");
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "If you see this, the server is up!" });
});

app.get("/api/articles", async (req, res) => {
  try {
    const requestType = req.query.requestType;
    const pageName = req.query.pageName;
    if (requestType === "preview" && typeof pageName === "string") {
      // make database request with pageName
      const pageArticles = await getArticleSummary(pageName);
      // TODO grab the first article with requested page name
      const firstRelArticle = JSON.parse(pageArticles)[0];
      res.status(200).json(firstRelArticle);
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
