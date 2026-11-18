import {defineField, defineType} from 'sanity'

export const contactDetail = defineType({
  name: 'contactDetail',
  title: 'Contact detail',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        accept: 'image/svg+xml,.svg,image/png,image/webp',
        hotspot: false,
      },
    }),
  ],
})
