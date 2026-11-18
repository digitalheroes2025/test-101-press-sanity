import {DocumentIcon} from '@sanity/icons/Document'
import {DocumentsIcon} from '@sanity/icons/Documents'
import {ImageIcon} from '@sanity/icons/Image'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Press Pages')
                .icon(DocumentIcon)
                .child(
                  S.documentTypeList('pressPage')
                    .title('Press Pages')
                    .defaultOrdering([
                      {field: 'edition', direction: 'asc'},
                      {field: 'language', direction: 'asc'},
                      {field: 'title', direction: 'asc'},
                    ]),
                ),
            ]),
        ),
      S.listItem()
        .title('Collections')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Collections')
            .items([
              S.listItem()
                .title('Ads')
                .icon(ImageIcon)
                .child(
                  S.documentTypeList('ad')
                    .title('Ads')
                    .defaultOrdering([
                      {field: 'edition', direction: 'asc'},
                      {field: 'format', direction: 'asc'},
                      {field: 'title', direction: 'asc'},
                    ]),
                ),
            ]),
        ),
    ])
