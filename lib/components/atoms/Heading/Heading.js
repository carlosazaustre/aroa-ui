import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Heading.module.css'

const Heading = ({ children, color, size }) => (
  <header
    className={classNames(styles.heading, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </header>
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
}

Heading.defaultProps = {
  color: 'secondary',
  size: 'xl',
}

export default Heading
