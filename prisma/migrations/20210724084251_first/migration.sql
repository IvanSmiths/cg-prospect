-- CreateTable
CREATE TABLE "Texture" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "secImage" TEXT NOT NULL,
    "scale" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "png2k" TEXT NOT NULL,
    "png2ksize" TEXT NOT NULL,
    "png4k" TEXT NOT NULL,
    "png4ksize" TEXT NOT NULL,
    "png8k" TEXT NOT NULL,
    "png8ksize" TEXT NOT NULL,
    "jpg2k" TEXT NOT NULL,
    "jpg2ksize" TEXT NOT NULL,
    "jpg4k" TEXT NOT NULL,
    "jpg4ksize" TEXT NOT NULL,
    "jpg8k" TEXT NOT NULL,
    "jpg8ksize" TEXT NOT NULL,
    "published" TEXT NOT NULL,
    "sponsorImage" TEXT NOT NULL,
    "sponsorName" TEXT NOT NULL,
    "sponsorLink" TEXT NOT NULL,
    "authorId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model3d" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "secImage" TEXT NOT NULL,
    "scale" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "published" TEXT NOT NULL,
    "lowpoly" TEXT NOT NULL,
    "lowpolysize" TEXT NOT NULL,
    "lowpolycount" TEXT NOT NULL,
    "midpoly" TEXT NOT NULL,
    "midpolysize" TEXT NOT NULL,
    "midpolycount" TEXT NOT NULL,
    "highpoly" TEXT NOT NULL,
    "highpolysize" TEXT NOT NULL,
    "highpolycount" TEXT NOT NULL,
    "sponsorImage" TEXT NOT NULL,
    "sponsorName" TEXT NOT NULL,
    "sponsorLink" TEXT NOT NULL,
    "authorId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Method" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelMethod" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModelCategory" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToTexture" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MethodToTexture" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Model3dToModelCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Model3dToModelMethod" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Texture.title_unique" ON "Texture"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Model3d.title_unique" ON "Model3d"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Method.title_unique" ON "Method"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ModelMethod.title_unique" ON "ModelMethod"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Category.title_unique" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ModelCategory.title_unique" ON "ModelCategory"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToTexture_AB_unique" ON "_CategoryToTexture"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToTexture_B_index" ON "_CategoryToTexture"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MethodToTexture_AB_unique" ON "_MethodToTexture"("A", "B");

-- CreateIndex
CREATE INDEX "_MethodToTexture_B_index" ON "_MethodToTexture"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Model3dToModelCategory_AB_unique" ON "_Model3dToModelCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_Model3dToModelCategory_B_index" ON "_Model3dToModelCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Model3dToModelMethod_AB_unique" ON "_Model3dToModelMethod"("A", "B");

-- CreateIndex
CREATE INDEX "_Model3dToModelMethod_B_index" ON "_Model3dToModelMethod"("B");

-- AddForeignKey
ALTER TABLE "Texture" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MethodToTexture" ADD FOREIGN KEY ("A") REFERENCES "Method"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MethodToTexture" ADD FOREIGN KEY ("B") REFERENCES "Texture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Model3dToModelMethod" ADD FOREIGN KEY ("A") REFERENCES "Model3d"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Model3dToModelMethod" ADD FOREIGN KEY ("B") REFERENCES "ModelMethod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTexture" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTexture" ADD FOREIGN KEY ("B") REFERENCES "Texture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Model3d" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Model3dToModelCategory" ADD FOREIGN KEY ("A") REFERENCES "Model3d"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Model3dToModelCategory" ADD FOREIGN KEY ("B") REFERENCES "ModelCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
