import { defineField } from "sanity";

export default {
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
        }),
    ]
}