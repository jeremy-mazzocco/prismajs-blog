const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const listPosts = [
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
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'secondo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    }
];


prisma.post.create({
    data: {
        slug: listPosts[1].slug,
        image: listPosts[1].image,
        content: listPosts[1].content,
        published: listPosts[1].published,
    },
}).then((newPost) => {
    console.log("New post: ", newPost);
});