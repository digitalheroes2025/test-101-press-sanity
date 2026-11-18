import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for browser tab and search results (50-60 characters recommended)',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search results (150-160 characters recommended)',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Media Share Image',
      type: 'image',
      description: 'Image shown when sharing on social media (Recommended: 1200×630 pixels)',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Keywords relevant to this content (optional)',
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The preferred version of this page for search engines (optional)',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      description: 'When enabled, tells search engines not to show this page in search results',
      initialValue: false,
    }),
  ],
})
