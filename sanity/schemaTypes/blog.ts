import { defineType, defineField } from 'sanity';

export default defineType({
    name: "blogs",
    title: "Blogs",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            initialValue: () => new Date().toISOString().split('T')[0],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' }, // standard rich text (paragraphs, headings, etc.)
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', title: 'Alt Text', type: 'string' },
                    ],
                },
            ],
        }),
    ],
});
