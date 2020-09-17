import React, { Component } from 'react'
import Layout from "../component/Layout"
import SEO from '../component/SEO'
import StyledHero from '../component/StyledHero'
import { graphql } from 'gatsby'
import Contact from '../component/Contact/Contact'

export default class contact extends Component {
    render() {
        return (
            <Layout>
                <SEO title='Contact' description="Contact Us for any queries, we respond within 2 days." />
                <StyledHero img={this.props.data.ContactBcg.childImageSharp.fluid}>
                </StyledHero>
                <Contact />
            </Layout>
        )
    }
}

export const query = graphql `
query{
  ContactBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`