const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Cancella l'elemento che corrisponde alla query indicata
prisma.post.delete({
  where: {
    id: 3
  }
}).then((post) => {
  console.log("Post: ", post);
})