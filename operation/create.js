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
        slug: 'terzo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: true,
    },
    {
        slug: 'querto-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'quinto-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: false,
    },
    {
        slug: 'sesto-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: true,
    },
    {
        slug: 'settimo-post',
        image: 'url_immagine.png',
        content: ' loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem.',
        published: true,
    }
];



// Create one post
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



// Create all posts
// prisma.post.createMany({
//     data: listPosts,
//     skipDuplicates: true,
// }).then((allPosts) => { 
//     console.log("All posts: ", allPosts)
// });