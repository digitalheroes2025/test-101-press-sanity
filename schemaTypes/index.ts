import {ad} from './documents/ad'
import {pressPage} from './documents/pressPage'
import {adBannerSection} from './objects/adBannerSection'
import {contactDetail} from './objects/contactDetail'
import {pressContactSection} from './objects/pressContactSection'
import {pressItem} from './objects/pressItem'
import {pressListSection} from './objects/pressListSection'
import {seo} from './objects/seo'

export const schemaTypes = [
  pressPage,
  ad,
  contactDetail,
  pressItem,
  pressContactSection,
  pressListSection,
  adBannerSection,
  seo,
]
