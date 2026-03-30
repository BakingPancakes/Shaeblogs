-- CreateTable
CREATE TABLE "article" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT,
    "date" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "article_title_key" ON "article"("title");
