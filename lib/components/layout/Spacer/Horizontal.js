import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { getSize } from './helpers'
import styles from './Spacer.module.css'

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.space, styles.horizontal, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      height: getSize(size),
    }}
  ></div>
)

Horizontal.propTypes = {
  size: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
}

Horizontal.defaultProps = {
  size: 'none',
  isVisible: false,
}

export default Horizontal
