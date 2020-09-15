import React from 'react'
import styles from '../css/footer.module.css'
import links from '../constants/link'
import social from '../constants/social'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((item,index)=>(<AniLink fade key={index} to={item.path}>{item.text}</AniLink>))}
            </div>
            <div className={styles.icons}>
                {social.map((item,index)=>(<a target='_blank' rel='noopener noreferrer' href={item.url} key={index}>{item.icon}</a>))}
            </div>
            <div className={styles.copyright}>
                copyright &copy; Backroads {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
        </footer>
    )
}
export default Footer