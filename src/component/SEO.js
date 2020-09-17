import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const getSEOdata = graphql`
    query {
        site {
            siteMetadata {
                siteTitle: title
                siteDesc: description
                author
                twitterUserName
                siteUrl
                img
            }
        }
    }
`

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getSEOdata)
    const { siteDesc, siteTitle, siteUrl, img, twitterUserName, author } = site.siteMetadata
    return (
        <Helmet htmlAttributes={{ lang : 'en' }} title={`${title} | ${siteTitle}`}>
            <meta name='description' content={description || siteDesc} />
            <meta name='image' content={img} />
            <meta name='author' content={author} />
            
            <meta name='twitter:card' content='Backroad - A Tour Company, Checkout our website' />
            <meta name='twitter:creator' content={twitterUserName} />
            <meta name='twitter:title' content={siteTitle} />
            <meta name='twitter:description' content={siteDesc} />
            <meta name='twitter:image' content={`${siteUrl}${img}`} />

            <meta property='og:url' content={siteUrl} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={siteTitle} />
            <meta property='og:description' content={siteDesc} />
            <meta property='og:image' content={`${siteUrl}${img}`} />
            <meta property='og:image:width' content='400' />
            <meta property='og:image:height' content='300' />
        </Helmet>
    )
}
export default SEO