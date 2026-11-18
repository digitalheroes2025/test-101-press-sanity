import {DocumentIcon} from '@sanity/icons/Document'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pressListSection = defineType({
  name: 'pressListSection',
  title: 'Press List',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineArrayMember({type: 'pressItem'})],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subheading: 'subheading',
      items: 'items',
    },
    prepare({title, subheading, items}) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: title || 'Press List',
        subtitle: [subheading, `${count} item${count === 1 ? '' : 's'}`]
          .filter(Boolean)
          .join(' · '),
      }
    },
  },
})
