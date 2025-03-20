import { defineField } from "sanity";

export default {
    name: 'studies',
    title: 'Studies',
    type: 'document',
    fields: [
        //Banner
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        //Challenges
        defineField({
            name: 'challenges',
            title: 'Challenges',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                }),
                defineField({
                    name: 'content',
                    title: 'Content',
                    type: 'array',
                    of: [{ type: 'block' }],
                }),
            ],
        }),

        //Results
        defineField({
            name: 'results',
            title: 'Results',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                }),
                defineField({
                    name: 'content',
                    title: 'Content',
                    type: 'array',
                    of: [{ type: 'block' }],
                }),
            ],
        }),

        //Client
        defineField({
            name: 'client',
            title: 'Client',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }),
                defineField({
                    name: 'content',
                    title: 'Content',
                    type: 'array',
                    of: [{ type: 'block' }],
                }),
            ],
        }),

        //Services
        defineField({
            name: 'services',
            title: 'Services',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                }),
                defineField({
                    name: 'subtitle',
                    title: 'Subtitle',
                    type: 'string',
                }),
                defineField({
                    name: 'cards',
                    title: 'Cards',
                    type: 'array',
                    of: [
                        defineField({
                            name: 'card',
                            title: 'Card',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                }),
                                defineField({
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                }),
                                defineField({
                                    name: 'image',
                                    title: 'Image',
                                    type: 'image',
                                    options: { hotspot: true },
                                }),
                                // Add more fields as needed for your card
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
}
