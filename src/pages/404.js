import React from "react"
import Layout from "../component/Layout"
import SEO from '../component/SEO'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Banner from '../component/Banner'

const ErrorPage = () => {
  return(
    <Layout>
      <SEO title='404' description="OOPS! Page you are looking for doesn't seem to exist" />
      <header className={styles.error}>
        <Banner title='404! Page Not Found' info="MAYBE YOU'LL FIND SOMETHING ON OUR HOME PAGE">
          <AniLink fade to='/' className='btn-white'>Back to Home Page</AniLink>
        </Banner>
      </header>
    </Layout>
    )
}
export default ErrorPage
