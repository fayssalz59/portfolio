import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const skillSchema = z.object({
  name: z.string(),
  detail: z.string().optional(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    weight: z.number().default(99),
    projectType: z.string(),
    github: z.string().optional(),
    demo: z.string().optional(),
    technical: z.string().optional(),
    problem: z.string(),
    solution: z.string(),
    result: z.string(),
    tech: z.array(z.string()),
    architectureTitle: z.string(),
    architectureSummary: z.string(),
    architecture: z.array(z.string()),
    skills: z.array(skillSchema),
    links: z.array(linkSchema).default([]),
  }),
});

export const collections = { projects };
