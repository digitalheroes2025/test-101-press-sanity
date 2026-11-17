import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'mainNav',
      type: 'array',
      of: [defineArrayMember({type: 'navItem'})],
    }),
    defineField({
      name: 'footerHeading',
      type: 'string',
      initialValue: 'ENTDECKEN SIE DIE 101 RANKINGS',
    }),
    defineField({
      name: 'footerLogos',
      type: 'array',
      of: [defineArrayMember({type: 'footerLogo'})],
    }),
    defineField({
      name: 'footerLinks',
      type: 'array',
      of: [defineArrayMember({type: 'footerLink'})],
    }),
    defineField({
      name: 'footerAd',
      type: 'footerAd',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
