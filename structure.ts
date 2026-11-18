import {DocumentIcon} from '@sanity/icons/Document'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Press Page')
        .icon(DocumentIcon)
        .child(S.document().schemaType('pressPage').documentId('pressPage').title('Press Page')),
    ])
