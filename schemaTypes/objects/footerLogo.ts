import {defineField, defineType} from 'sanity'

export const footerLogo = defineType({
  name: 'footerLogo',
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
        rule.required().uri({
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
  preview: {
    select: {
      title: 'alt',
      subtitle: 'href',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Footer logo',
        subtitle,
        media,
      }
    },
  },
})
