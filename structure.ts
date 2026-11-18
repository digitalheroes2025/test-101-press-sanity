import {DocumentIcon} from '@sanity/icons/Document'
import {DocumentsIcon} from '@sanity/icons/Documents'
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
    ])
