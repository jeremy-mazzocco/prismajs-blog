const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let listPosts = [
    {
        slug: 'primo-post',
        image: 'url_immagine.jpg',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: true,
    },
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
];


prisma.post.create({
    data: {
        slug: listPosts[0].slug,
        image: listPosts[0].image,
        content: listPosts[0].content,
        published: listPosts[0].published,
    },
}).then((newPost) => {
    console.log("New post: ", newPost);
});