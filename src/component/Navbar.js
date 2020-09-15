import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/link'
import social from '../constants/social'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [ isOpen, setNav ] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt='Backroad Logo' />
          <button onClick={toggleNav} type='button' className={styles.logoBtn}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {links.map((item,index)=>(<li key={index}><AniLink fade to={item.path}>{item.text}</AniLink></li>))}
        </ul>
        <div className={styles.navSocialLinks}>
          {social.map((item,index)=>(<a target='_blank' rel='noopener noreferrer' href={item.url} key={index}>{item.icon}</a>))}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
