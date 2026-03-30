import express from "express";
import type { article } from "../../shared/generated/prisma/index.js";
import { Page } from "../../shared/generated/prisma/index.js";
import { getArticlesByPage } from "./databaseAPI.js";

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
    const pageName = req.query.pageName;
    if (typeof pageName !== "string") {
      throw new Error("Page name received was somehow not a string.");
    }
    // should throw error if pageName doesn't follow Page convention
    if (!Object.values(Page).includes(pageName as Page)) {
      throw new Error(
        `Page requested does not exist ${pageName}. Please refer to prisma schema for valid pages.`,
      );
    }
    console.log("passed!");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // @ts-ignore
    const pageArticles: article[] = await getArticlesByPage(pageName);
    const firstRelArticle = pageArticles.filter(
      (article) => article.page === pageName,
    )[0];
    res.status(200).json(firstRelArticle);
  } catch (error) {
    console.log("Error retrieving article information:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Starting ExpressJS server on port ${PORT}...`);
});
