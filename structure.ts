import {CogIcon} from '@sanity/icons/Cog'
import {DocumentIcon} from '@sanity/icons/Document'
import {TagIcon} from '@sanity/icons/Tag'
import type {StructureResolver} from 'sanity/structure'

const singletonTypes = new Set(['siteSettings', 'pressPage'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site Settings')),
      S.listItem()
        .title('Press Page')
        .icon(DocumentIcon)
        .child(S.document().schemaType('pressPage').documentId('pressPage').title('Press Page')),
      S.divider(),
      S.listItem()
        .title('Press Items')
        .icon(TagIcon)
        .child(
          S.list()
            .title('Press Items')
            .items([
              S.listItem()
                .title('All')
                .child(
                  S.documentTypeList('pressItem')
                    .title('All Press Items')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Presse (coverage)')
                .child(
                  S.documentList()
                    .title('Presse (coverage)')
                    .filter('_type == "pressItem" && category == "coverage"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Pressemitteilungen')
                .child(
                  S.documentList()
                    .title('Pressemitteilungen')
                    .filter('_type == "pressItem" && category == "release"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Podcasts')
                .child(
                  S.documentList()
                    .title('Podcasts')
                    .filter('_type == "pressItem" && category == "podcast"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
            ]),
        ),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? !singletonTypes.has(id) && id !== 'pressItem' : true
      }),
    ])
