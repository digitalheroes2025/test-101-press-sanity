import {defineArrayMember, defineField, defineType} from 'sanity'

export const navChild = defineType({
  name: 'navChild',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const navItem = defineType({
  name: 'navItem',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      description: 'Leave empty when this item only opens a submenu.',
    }),
    defineField({
      name: 'children',
      type: 'array',
      of: [defineArrayMember({type: 'navChild'})],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      href: 'href',
      children: 'children',
    },
    prepare({title, href, children}) {
      const childCount = Array.isArray(children) ? children.length : 0
      return {
        title,
        subtitle: href || (childCount ? `${childCount} submenu items` : 'No link'),
      }
    },
  },
})
