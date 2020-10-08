import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../../atoms/Icon'
import Spacer from '../../layout/Spacer'
import styles from './Button.module.css'

const Button = ({
  children,
  onClick,
  color,
  size,
  variant,
  disabled,
  startIcon,
  endIcon,
}) => (
  <button
    className={classNames(styles.button, {
      [styles[`color-${color}`]]: color,
      [styles[`variant-${variant}`]]: variant,
      [styles[`size-${size}`]]: size,
      [styles.disabled]: disabled,
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {startIcon && (
      <>
        <Icon size={size} type={startIcon} />
        <Spacer size="xs" />
      </>
    )}
    {children}
    {endIcon && (
      <>
        <Spacer size="xs" />
        <Icon size={size} type={endIcon} />
      </>
    )}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['filled', 'outline', 'text']),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
}

Button.defaultProps = {
  color: 'default',
  size: 'md',
  variant: 'filled',
  startIcon: null,
  endIcon: null,
}

export default Button
