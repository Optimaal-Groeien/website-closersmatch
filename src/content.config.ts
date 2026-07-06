import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    locale: z.enum(['nl', 'en']),
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    pillar: z.string().optional(),
    category: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Stefan Kelderman'),
    image: z.string(),
    imageAlt: z.string(),
    readingTime: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
    relatedLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
