import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { mapSize } from './helpers'
import Picture from '../../atoms/Picture'
import styles from './Avatar.module.css'

const Avatar = ({ src, size, type }) => (
  <div
    className={classNames(styles.avatar, {
      [styles[`type-${type}`]]: type,
    })}
  >
    <Picture src={src} width={mapSize(size)} height={mapSize(size)} isRounded />
  </div>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['primary', 'secondary']),
}

Avatar.defaultProps = {
  src: 'images/default-avatar.jpg',
  size: 'md',
}

export default Avatar
