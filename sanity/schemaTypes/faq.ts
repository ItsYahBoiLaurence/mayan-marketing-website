import { defineField } from "sanity";

export default {
    name: "faqs",
    title: "FAQs",
    type: "document",
    fields: [
        defineField({
            name: "question",
            type: "string",
            title: "Question"
        }),
        defineField({
            name: "category",
            type: "string",
            title: "Category",
        }),
        defineField({
            name: "answer",
            type: "text",
            title: "Answer",
        }),
    ]
}