import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

const EDITIONS = [
  {title: 'Deutschland', value: 'deutschland'},
  {title: 'Schweiz', value: 'schweiz'},
  {title: 'Austria', value: 'austria'},
] as const

const LANGUAGES = [
  {title: 'Deutsch', value: 'de'},
  {title: 'English', value: 'en'},
] as const

export const pressPage = defineType({
  name: 'pressPage',
  title: 'Press Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'pressItems', title: 'Press Items'},
    {name: 'ads', title: 'Ads'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      group: 'content',
      options: {
        list: [...LANGUAGES],
        layout: 'radio',
      },
      initialValue: 'de',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
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
      group: 'content',
      options: {
        list: [...EDITIONS],
      },
      initialValue: 'deutschland',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactName',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'contactDetail',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'contactDetail',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'contactDetail',
      group: 'content',
      validation: (rule) =>
        rule.required().custom((value) => {
          const text = (value as {text?: string} | undefined)?.text
          if (!text) return 'Email text is required'
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) return 'Must be a valid email'
          return true
        }),
    }),
    defineField({
      name: 'presseHeading',
      type: 'string',
      group: 'content',
      initialValue: 'Presse',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'presseSubheading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'releasesHeading',
      type: 'string',
      group: 'content',
      initialValue: 'Pressemitteilungen',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'podcastsHeading',
      type: 'string',
      group: 'content',
      initialValue: 'Podcasts',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Press Items',
      type: 'array',
      group: 'pressItems',
      of: [defineArrayMember({type: 'pressItem'})],
    }),
    defineField({
      name: 'bottomAd',
      title: 'Bottom ad',
      type: 'object',
      group: 'ads',
      fields: [
        defineField({
          name: 'image',
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
          type: 'string',
          initialValue: 'Anzeige',
        }),
        defineField({
          name: 'href',
          title: 'Link URL',
          type: 'url',
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
