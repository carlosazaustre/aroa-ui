import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { getSize } from './helpers'
import styles from './Spacer.module.css'

const Vertical = ({ size, maxHeight, isVisible }) => (
  <div
    className={classNames(styles.spacer, styles.vertical, {
      [styles['is-visible']]: isVisible,
    })}
    style={{
      maxHeight,
      width: getSize(size),
    }}
  ></div>
)

Vertical.propTypes = {
  size: PropTypes.string.isRequired,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isVisible: PropTypes.bool,
}

Vertical.defaultProps = {
  size: 'none',
  isVisible: false,
  maxHeight: '100%',
}

export default Vertical
