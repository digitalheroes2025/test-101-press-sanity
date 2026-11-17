import {pressItem} from './documents/pressItem'
import {pressPage} from './documents/pressPage'
import {siteSettings} from './documents/siteSettings'
import {footerAd} from './objects/footerAd'
import {footerLink} from './objects/footerLink'
import {footerLogo} from './objects/footerLogo'
import {navChild, navItem} from './objects/navItem'

export const schemaTypes = [
  siteSettings,
  pressPage,
  pressItem,
  navItem,
  navChild,
  footerLink,
  footerLogo,
  footerAd,
]
