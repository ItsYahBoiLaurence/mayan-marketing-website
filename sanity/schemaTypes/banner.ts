import { title } from "process";
import { defineField } from "sanity";

export default {
    name: "page_banner",
    title: "Page Banners",
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
            name: "banner",
            title: "Banner Details",
            type: "object",
            fields: [
                defineField({
                    name: "title",
                    type: "string",
                    title: "Title"
                }),
                defineField({
                    name: "subtitle",
                    type: "string",
                    title: "Subtitle"
                }),
                defineField({
                    name: "description",
                    type: "text",
                    title: "description"
                }),
                defineField({
                    name: "buttons",
                    title: "Buttons",
                    type: 'array',
                    of: [
                        {
                            name: 'button_details',
                            title: 'Button Details',
                            type: 'object',
                            fields: [
                                {
                                    name: 'btn_label',
                                    title: 'Button Label',
                                    type: 'string'
                                },
                                {
                                    name: 'btn_link',
                                    title: 'Button Link',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image'
                }),
                defineField({
                    name: 'style',
                    title: 'Style',
                    type: 'number',
                    options: {
                        list: [
                            { title: 'Style 1', value: 1 },
                            { title: 'Style 2', value: 2 }
                        ]
                    }
                })
            ]
        })
    ]
}