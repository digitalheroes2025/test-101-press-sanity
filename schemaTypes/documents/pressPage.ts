import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pressPage = defineType({
  name: 'pressPage',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'pressItems', title: 'Press Items'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'agencyName',
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
      name: 'bottomAd',
      title: 'Bottom ad',
      type: 'object',
      group: 'content',
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
      name: 'items',
      title: 'Press Items',
      type: 'array',
      group: 'pressItems',
      of: [defineArrayMember({type: 'pressItem'})],
    }),
    defineField({
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
      group: 'seo',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Press Page'}
    },
  },
})
