const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.post.update({
  where: {
    id: 3
  },
  data: {
    slug: "edited-post",
    image: "url_immagine.jpg",
    // content: "edited content",
    published: true,
  }
}).then((post) => {
  console.log("Post edited: ", post);
})