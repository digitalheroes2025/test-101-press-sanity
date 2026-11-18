import {ImageIcon} from '@sanity/icons/Image'
import {defineField, defineType} from 'sanity'

import {AD_TYPES} from '../constants'

const AD_LABELS = [{title: 'Anzeige', value: 'Anzeige'}]

export const adBannerSection = defineType({
  name: 'adBannerSection',
  title: 'Ad Banner Section',
  type: 'object',
  icon: ImageIcon,
  groups: [
    {name: 'desktop', title: 'Desktop', default: true},
    {name: 'mobile', title: 'Mobile'},
  ],
  fields: [
    defineField({
      name: 'desktopLabel',
      title: 'Label',
      type: 'string',
      description: 'Small line printed above the banner.',
      group: 'desktop',
      options: {list: AD_LABELS},
      initialValue: 'Anzeige',
    }),
    defineField({
      name: 'desktopAdType',
      title: 'Ad Type',
      type: 'string',
      description:
        'Which format to show here. A random ad of this format is picked from this market’s list, under Collections → Ads, on every view.',
      group: 'desktop',
      options: {
        list: [...AD_TYPES],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'mobileLabel',
      title: 'Label',
      type: 'string',
      description: 'Small line printed above the banner.',
      group: 'mobile',
      options: {list: AD_LABELS},
      initialValue: 'Anzeige',
    }),
    defineField({
      name: 'mobileAdType',
      title: 'Ad Type',
      type: 'string',
      description:
        'Which format to show here. A random ad of this format is picked from this market’s list, under Collections → Ads, on every view.',
      group: 'mobile',
      options: {
        list: [...AD_TYPES],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: {
      desktopType: 'desktopAdType',
      mobileType: 'mobileAdType',
      desktopLabel: 'desktopLabel',
    },
    prepare({desktopType, mobileType, desktopLabel}) {
      return {
        title: 'Ad Banner Section',
        subtitle: [desktopLabel, desktopType || mobileType].filter(Boolean).join(' · '),
      }
    },
  },
})
