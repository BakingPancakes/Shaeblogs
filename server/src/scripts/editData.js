import { prisma } from "../prisma/db.ts";

prisma.article
  .update({
    where: { id: "cmncfu0ie0000ws96jr9jnh2a" },
    data: { publishedAt: new Date() },
  })
  .catch((e) => console.log(e));
