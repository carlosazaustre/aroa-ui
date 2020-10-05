const ICONS_ASSETS_PATH = '/icons'

export const iconTypes = {
  account: 'account_circle',
  logout: 'exit_to_app',
  close: 'clear',
  comment: 'chat_bubble_outline',
  retweet: 'loop',
  favoriteOutline: 'favorite_outline',
  favoriteFill: 'favorite',
  bookmarkOutline: 'bookmark_outline',
  bookmarkFill: 'bookmark',
  picture: 'add_photo_alternate',
  pictureAdd: 'camera_alt',
  angleDown: 'arrow_drop_down',
  contactAdd: 'person_add',
  contact: 'person',
  contactGroup: 'group',
  contactOk: 'how_to_reg',
  privateOutline: 'lock_outline',
  privateFill: 'https',
  public: 'public',
  mail: 'mail_outline',
  explore: 'explore',
  home: 'home',
  facebook: 'facebook',
  google: 'google',
  twitter: 'twitter',
  github: 'github',
}

const iconSizes = {
  sm: 13,
  md: 16,
  lg: 18,
}

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconTypes[type]}.svg`
export const mapSize = (size) => iconSizes[size]
