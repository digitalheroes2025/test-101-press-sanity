import {DocumentIcon} from '@sanity/icons/Document'
import {defineField, defineType} from 'sanity'

export const pressPage = defineType({
  name: 'pressPage',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
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
      name: 'addressLabel',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().email(),
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
