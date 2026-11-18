import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

import {EDITIONS} from '../constants'

export const pressPage = defineType({
  name: 'pressPage',
  title: 'Press Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [{name: 'seo', title: 'SEO'}],
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Deutsch', value: 'de'},
          {title: 'English', value: 'en'},
        ],
      },
      initialValue: 'de',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'edition',
      title: 'Edition',
      type: 'string',
      options: {
        list: [
          {title: 'Deutschland', value: 'deutschland'},
          {title: 'Schweiz', value: 'schweiz'},
          {title: 'Austria', value: 'austria'},
        ],
      },
      initialValue: 'deutschland',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'pressContactSection',
          options: {modal: {type: 'dialog'}},
        }),
        defineArrayMember({
          type: 'pressListSection',
          options: {modal: {type: 'dialog'}},
        }),
        defineArrayMember({
          type: 'adBannerSection',
          options: {modal: {type: 'dialog'}},
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Title',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Edition',
      name: 'editionAsc',
      by: [
        {field: 'edition', direction: 'asc'},
        {field: 'language', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      edition: 'edition',
    },
    prepare({title, language, edition}) {
      const editionLabel =
        EDITIONS.find((item) => item.value === edition)?.title || edition || 'Edition'
      const languageLabel = language ? `[${language}]` : ''
      return {
        title: title || 'Press Page',
        subtitle: `${editionLabel} ${languageLabel}`.trim(),
      }
    },
  },
})
