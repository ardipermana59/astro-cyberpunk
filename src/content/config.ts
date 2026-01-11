import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    summary: z.string(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    summary: z.string(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = {
  blog,
  portfolio,
};
