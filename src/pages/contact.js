import React, { Component } from 'react'
import Layout from "../component/Layout"
import StyledHero from '../component/StyledHero'
import { graphql } from 'gatsby'
import Contact from '../component/Contact/Contact'

export default class contact extends Component {
    render() {
        return (
            <Layout>
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