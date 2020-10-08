import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Input.module.css'

const Input = ({
  id,
  label,
  onChange,
  type,
  value,
  error,
  helperText,
  disabled,
  placeholder,
}) => (
  <div className={styles.container}>
    <label
      htmlFor={id}
      className={classNames(styles.label, {
        [styles.error]: error,
      })}
    >
      {label}
    </label>
    <div className={styles['.input-container']}>
      <input
        id={id}
        className={classNames(styles.input, {
          [styles.error]: error,
          [styles.disabled]: disabled,
        })}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <div
        className={classNames(styles.helper, {
          [styles.error]: error,
        })}
      >
        {helperText}
      </div>
    </div>
  </div>
)

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text']),
  value: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  error: false,
  disabled: false,
}

export default Input
