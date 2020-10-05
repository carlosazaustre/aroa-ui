import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Text.module.css'

const Text = ({ children, color, size }) => (
  <p
    className={classNames(styles.text, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </p>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['dark', 'light']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

Text.defaultProps = {
  color: 'dark',
  size: 'md',
}

export default Text
