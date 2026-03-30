import { prisma } from "../../prisma/prisma.ts";

const sipsTest1 = {
  page: "SIPS",
  title: "New Creations: Getting Wild",
  content:
    "Today my super cool and hot boyfriend got a Strawberry Honey Matcha, and I got a Strawberry Latte with Cherry Vanilla Coldfoam. My boyfriend got a taste of mine and said it tasted like sausage. I don't agree with him one bit! The inside is super cozy with lots of seating and a little shop with flowers and flower-themed soaps. The music was all over the place though, playing a mix between the Beetles, AC/DC, Beach Boys, Michael Jackson, and Queen. Needed some more Olivia Dean up in this bih. My boyfriend and I (the really hot one) also brought our laptops, and the environment was very conducive to that. It also took me a while to realize but the article I was reading about the psychological benefits of hot yoga was published on my birthday, Feb 11th 🤓. Anyways, that's all I have for today, ✨sparkle on!✨🦄",
  summary:
    "There's more to New Creations besides good Matcha for my boyfriend and a cozy environment for reading about Hot Yoga :D",
};

const sipsTest2 = {
  page: "SIPS",
  title: "Another cool cawfee shop",
  content: "cool coffee stuff",
  summary: "cool cawfee stuff?!?!?!?!",
};

const flicsTest2 = {
  page: "FLICS",
  title: "Super cute photos",
  content: "blah blah cute images",
  summary: "cute images summary!",
};

const flicsTest2 = {
  page: "FLICS",
  title: "More super cute photos!",
  content: "super cute image that will blow your socks clean off",
  summary: "get ready to get them socks blown clean off",
};

const createSips1 = () =>
  prisma.article.create({
    data: sipsTest1,
  });

const createFlics1 = () =>
  prisma.article.create({
    data: flicsTest1,
  });

const createSips2 = () =>
  prisma.article.create({
    data: sipsTest2,
  });

createSips2().catch((e) => console.log(e));
