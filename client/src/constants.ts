import type { Article } from "./Components/types";

export const THEME = {
  PRIMARY_1: "#FFC9C9",
  PRIMIARY_2: "#D0F6FC",
  SECONDARY_1: "#9AB297",
  SECONDARY_2: "#FFFFFF",
};

export const ERROR_ARTICLE_ID = "404";

export const ERROR_ARTICLE: Article = {
  id: `${ERROR_ARTICLE_ID}`,
  page: "sips",
  title: "Article Unavailable :(",
  thumbnail: "",
  createdAt: new Date(),
  publishedAt: new Date(),
  updatedAt: new Date(),
  content:
    "Sorry, but we're unable to retrieve this article at this time. In the meantime, please explore what else shaebae.blog has to offer :D",
  summary:
    "Sorry, but we're unable to retrieve this article at this time. In the meantime, please explore what else shaebae.blog has to offer :D",
};

export const EMPTY_ARTICLE: Article = {
  id: `${ERROR_ARTICLE_ID}`,
  page: "sips",
  title: "",
  thumbnail: "",
  createdAt: new Date(),
  publishedAt: new Date(),
  updatedAt: new Date(),
  content: "",
  summary: "",
};

export const MISSING_IMAGE_PATH = "/image-placeholder.png";

// use Intl.DateTimeFormat instead at some point
export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const DAYS_SHORTENED = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
export const MONTHS = [
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];
