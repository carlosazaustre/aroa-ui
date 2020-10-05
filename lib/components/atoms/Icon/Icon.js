import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Picture from '../Picture'
import styles from './Icon.module.css'
import { mapSize, mapType } from './helpers'

const Icon = ({ className, type, size }) => (
  <div
    className={classNames(className, styles.icon)}
    style={{
      width: mapSize(size),
      height: mapSize(size),
    }}
  >
    <Picture src={mapType(type)} width={mapSize(size)} />
  </div>
)

Icon.propTypes = {
  type: PropTypes.oneOf([
    'account',
    'logout',
    'close',
    'comment',
    'retweet',
    'favoriteOutline',
    'favoriteFill',
    'bookmarkOutline',
    'bookmarkFill',
    'picture',
    'pictureAdd',
    'angleDown',
    'contactAdd',
    'contact',
    'contactGroup',
    'contactOk',
    'privateOutline',
    'privateFill',
    'public',
    'mail',
    'explore',
    'home',
    'facebook',
    'google',
    'twitter',
    'github',
  ]).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: 'md',
}

export default Icon
