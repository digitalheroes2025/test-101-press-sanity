import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

import {AD_TYPES, EDITIONS} from '../constants'

export const ad = defineType({
  name: 'ad',
  title: 'Ad',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'edition',
      title: 'Edition / Market',
      type: 'string',
      options: {
        list: [...EDITIONS],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [...AD_TYPES],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'externalImageUrl',
      title: 'External image URL',
      type: 'url',
    }),
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      initialValue: 'Anzeige',
    }),
    defineField({
      name: 'href',
      title: 'Link URL',
      type: 'url',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      edition: 'edition',
      format: 'format',
      media: 'image',
    },
    prepare({title, edition, format, media}) {
      return {
        title: title || 'Ad',
        subtitle: [edition, format].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
