/* eslint-disable @typescript-eslint/no-unused-vars */

import { prisma } from "../prisma.ts";
import { createUUID } from "../utils/utils.js";

// const articleTest: {
//     page: string;
//     title: string;
//     thumbnail: string | null;
//     date: number;
//     content: string;
//     summary: string;
// }

const createSipsArticle = () =>
  prisma.article.create({
    data: {
      id: createUUID(),
      page: "Sips",
      title: "New Creations: Getting Wild",
      thumbnail: null,
      date: 33826,
      content:
        "Today my super cool and hot boyfriend got a Strawberry Honey Matcha, and I got a Strawberry Latte with Cherry Vanilla Coldfoam. My boyfriend got a taste of mine and said it tasted like sausage. I don't agree with him one bit! The inside is super cozy with lots of seating and a little shop with flowers and flower-themed soaps. The music was all over the place though, playing a mix between the Beetles, AC/DC, Beach Boys, Michael Jackson, and Queen. Needed some more Olivia Dean up in this bih. My boyfriend and I (the really hot one) also brought our laptops, and the environment was very conducive to that. It also took me a while to realize but the article I was reading about the psychological benefits of hot yoga was published on my birthday, Feb 11th 🤓. Anyways, that's all I have for today, ✨sparkle on!✨🦄",
      summary:
        "There's more to New Creations besides good Matcha for my boyfriend and a cozy environment for reading about Hot Yoga :D",
    },
  });

// console.log(articleTest);

const createFlicsArticle = () => {
  prisma.article.create({
    data: {
      id: createUUID(),
      page: "Flics",
      title: "Super cute photos",
      thumbnail: null,
      date: new Date(), // change this to some other format
      content: "blah blah cute images", //TODO do some research on how to encode an article's contents
      summary: "cute images summary!",
    },
  });
};
