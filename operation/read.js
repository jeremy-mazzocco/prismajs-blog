const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// Read one post
prisma.post.findFirst({
  where: {
    id: 1
  }
}).then((post) => {
  console.log("Here your post: ", post);
});

// Read all posts
prisma.post.findMany().then((posts) => {

  console.log("Here all posts: ", posts);
});