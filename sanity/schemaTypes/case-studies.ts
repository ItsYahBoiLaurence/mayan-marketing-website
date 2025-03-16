import { defineField } from "sanity";

export default {
    name: "case-studies",
    title: "Case Studies",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            description: "This is the case study title.",
            type: 'string'
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "This is a brief description of the Case Study",
            type: 'string',
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: 'slug',
            options: { source: "title" }
        }),
        defineField({
            type: "reference",
            to: [{ type: "author" }],
            name: "author",
            title: "Author"
        }),
        defineField({
            name: "content",
            title: "Content",
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: "image",
            title: "Image",
            type: 'image',
            options: { hotspot: true }
        }),
    ]
}