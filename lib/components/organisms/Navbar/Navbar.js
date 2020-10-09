import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon'
import Picture from '../../atoms/Picture'
import Button from '../../molecules/Button'
import styles from './Navbar.module.css'

const NavbarItem = ({ link, url }) => (
  <li className={styles['list-item']}>
    <a href={url}>{link}</a>
  </li>
)

const Navbar = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  //FIXME: Use mediaqueries to handle the behavior of menu on large screens
  // Util: https://dev.to/bholmesdev/building-a-sexy-mobile-ready-navbar-in-any-web-framework-3lm2?utm_source=digest_mailer&utm_medium=email&utm_campaign=digest_email

  return (
    <nav className={styles.navbar}>
      {isOpen && (
        <ul className={styles.list}>
          {items.map(({ link, url }) => (
            <NavbarItem key={link} link={link} url={url} />
          ))}
        </ul>
      )}
      <div className={styles['navbar-left']}>
        <Picture src="images/theme-logo.png" width={50} alt="Logo" />
      </div>
      <div className={styles['navbar-right']}>
        <Button
          className={styles['menu-btn']}
          variant="text"
          size="xs"
          onClick={handleOpenMenu}
        >
          <Icon type="menu" size="lg" />
        </Button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
}

NavbarItem.propTypes = {
  link: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

Navbar.defaultProps = {}

export default Navbar
