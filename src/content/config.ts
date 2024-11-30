import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		shortName: z.string(),
		description: z.string(),
		coverImageUrl: z.string(),
		projectUrl: z.string(),
		githubUrl: z.string(),
		tags: z.array(z.string()),
		tech: z.array(z.string()),
		wip: z.boolean(),
	})
})

export const collections = { blog, projects };
