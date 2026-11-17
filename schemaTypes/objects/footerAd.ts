import {defineField, defineType} from 'sanity'

export const footerAd = defineType({
  name: 'footerAd',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'externalImageUrl',
      type: 'url',
      description: 'Optional fallback image URL when no Sanity image is uploaded.',
    }),
    defineField({
      name: 'href',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          allowRelative: true,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
    }),
  ],
})
