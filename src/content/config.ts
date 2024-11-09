import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
    })
})

const consejos = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        img_alt: z.string()
    })
})

const libros = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string(),
        img_alt: z.string(),
        link: z.string()
    })
})

const about = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        img_alt: z.string(),
    })
});

const recursos = defineCollection({
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        img: z.string(),
        description: z.string(),
        link: z.string(),
        plataform: z.string()
    })
})  

export const collections = { posts, consejos, libros, about, recursos }