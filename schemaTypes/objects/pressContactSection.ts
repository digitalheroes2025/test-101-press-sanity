import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const pressContactSection = defineType({
  name: 'pressContactSection',
  title: 'Press Contact',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Pressekontakt',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactName',
      title: 'Contact Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'contactDetail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'contactDetail',
      validation: (rule) =>
        rule.required().custom((value) => {
          const text = (value as {text?: string} | undefined)?.text
          if (!text) return 'Email text is required'
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) return 'Must be a valid email'
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      companyName: 'companyName',
      contactName: 'contactName',
    },
    prepare({title, companyName, contactName}) {
      return {
        title: title || 'Press Contact',
        subtitle: [companyName, contactName].filter(Boolean).join(' · '),
      }
    },
  },
})
