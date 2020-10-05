import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Picture.module.css'

const Picture = ({ src, width, height, alt, isRounded }) => (
  <picture
    className={classNames(styles.picture, {
      [styles['is-rounded']]: isRounded,
    })}
  >
    <img src={src} style={{ height, maxWidth: width }} alt={alt} />
  </picture>
)

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  isRounded: PropTypes.bool,
}

Picture.defaultProps = {
  height: 'auto',
}

export default Picture
