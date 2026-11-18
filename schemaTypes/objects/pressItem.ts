import {TagIcon} from '@sanity/icons/Tag'
import {defineField, defineType} from 'sanity'

export const pressItem = defineType({
  name: 'pressItem',
  title: 'Press Item',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Presse (coverage)', value: 'coverage'},
          {title: 'Pressemitteilung', value: 'release'},
          {title: 'Podcast', value: 'podcast'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'outlet',
      type: 'string',
      description: 'Shown in parentheses after the title, e.g. Bunte',
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          {title: 'External URL', value: 'url'},
          {title: 'File (PDF)', value: 'file'},
        ],
        layout: 'radio',
      },
      initialValue: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'url',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {linkType?: string} | undefined
          if (parent?.linkType === 'url' && !value) {
            return 'URL is required when link type is External URL'
          }
          return true
        }),
    }),
    defineField({
      name: 'file',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      hidden: ({parent}) => parent?.linkType !== 'file',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {linkType?: string} | undefined
          if (parent?.linkType === 'file' && !value) {
            return 'File is required when link type is File'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      category: 'category',
      outlet: 'outlet',
    },
    prepare({title, publishedAt, category, outlet}) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('de-DE')
        : 'No date'
      return {
        title,
        subtitle: [date, category, outlet].filter(Boolean).join(' · '),
      }
    },
  },
})
