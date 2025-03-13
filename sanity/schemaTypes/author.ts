import { defineField } from "sanity";

export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Name"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "name" }
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Profile Image",
            options: { hotspot: true }
        }),
    ]
}