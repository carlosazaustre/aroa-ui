import React from 'react'
import PropTypes from 'prop-types'

import styles from './Link.module.css'

const Link = ({ children, href, target, rel, onClick }) => (
  <a
    className={styles.link}
    href={href}
    rel={rel}
    target={target}
    onClick={onClick}
  >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  rel: PropTypes.string,
  onClick: PropTypes.func,
}

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
  onClick: (e) => e.preventDefault(),
}

export default Link
