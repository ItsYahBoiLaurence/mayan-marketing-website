import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'gatedContent',
    title: 'Gated Contents',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) =>
                Rule.required().error('A title is required'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        { name: 'alt', title: 'Alt Text', type: 'string' },
                    ],
                },
            ],
        }),

        // 🟢 Toggle for content type
        defineField({
            name: 'gatedPdfContent',
            title: 'Gated PDF Content',
            type: 'boolean',
            initialValue: true,
        }),

        // 📄 PDF File (only when gatedPdfContent is ON)
        defineField({
            name: 'file',
            title: 'File',
            type: 'file',
            options: {
                accept: 'application/pdf',
                storeOriginalFilename: true,
            },
            hidden: ({ parent }) => !parent?.gatedPdfContent,
        }),

        // 🎥 Video File (only when gatedPdfContent is OFF)
        defineField({
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            options: {
                accept: 'video/*',
                storeOriginalFilename: true,
            },
            hidden: ({ parent }) => parent?.gatedPdfContent,
        }),

        // ✨ Highlights (only when gatedPdfContent is ON)
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            hidden: ({ parent }) => !parent?.gatedPdfContent,
        }),
    ],
});
