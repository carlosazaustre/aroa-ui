import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Input.module.css'

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    className={classNames(styles.input)}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
