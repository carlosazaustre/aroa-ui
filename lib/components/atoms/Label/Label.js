import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Label.module.css'

const Label = ({ children, appearance, size }) => (
  <div
    className={classNames(styles.label, {
      [styles[`appearance-${appearance}`]]: appearance,
      [styles[`size-${size}`]]: size,
    })}
  >
    {children}
  </div>
)

Label.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf([
    'default',
    'information',
    'success',
    'warning',
    'danger',
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Label.defaultProps = {
  appearance: 'default',
  size: 'sm',
}

export default Label
