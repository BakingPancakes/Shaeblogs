import express from "express";
import {
  getArticleByID,
  getArticlesByPage,
  getMostRecentArticle,
} from "./databaseAPI.js";
import { isPage } from "./types.js";

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
    const articleID = req.query.articleID?.toString();
    const pageName = req.query.pageName?.toString().toUpperCase();
    // handle pageName
    if (pageName !== undefined && isPage(pageName)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      // @ts-ignore
      const pageArticles: article[] = await getArticlesByPage(pageName);
      const firstRelArticle = pageArticles.filter(
        (article) => article.page === pageName,
      )[0];
      res.status(200).json(firstRelArticle);
    }
    // handle articleID
    if (articleID !== undefined) {
      const article = await getArticleByID(articleID);
      res.status(200).json(article);
    } else {
      throw new Error(
        "Invalid parameter. Accepted parameters: Page or Article ID",
      );
    }
  } catch (error) {
    console.log("Error retrieving article information:", error);
  }
});

app.get("/api/articles/mostrecent", async (_req, res) => {
  try {
    const data = await getMostRecentArticle();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error retrieving article information:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Starting ExpressJS server on port ${PORT}...`);
});
