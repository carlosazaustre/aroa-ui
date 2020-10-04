import React from 'react'
import PropTypes from 'prop-types'

import styles from './Token.module.css'

const Token = () => {
  return <></>
}

const TokenColor = ({ label, value }) => (
  <div className={styles.container}>
    <div className={styles.color} style={{ backgroundColor: value }}></div>
    <div className={styles.description}>
      <span className={styles.label}>{label}</span>
      <span className={styles.label}>{value}</span>
    </div>
  </div>
)

TokenColor.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

Token.Color = TokenColor
export default Token
