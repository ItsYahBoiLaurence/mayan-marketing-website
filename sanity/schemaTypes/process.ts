import { defineField } from "sanity";

export default {
    name: "process",
    title: "Process",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title"
        }),
        defineField({
            name: "order",
            type: "string",
            title: "Order"
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