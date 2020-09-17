import React, { Component } from 'react'
import Layout from "../component/Layout"
import SEO from '../component/SEO'
import StyledHero from '../component/StyledHero'
import { graphql } from 'gatsby'
import Tours from '../component/Tours/Tours'

export default class tours extends Component {
    render() {
        return (
            <Layout>
                <SEO title='Tours' />
                <StyledHero img={this.props.data.DefaultBcg.childImageSharp.fluid}>
                </StyledHero>
                <Tours />
            </Layout>
        )
    }
}

export const query = graphql `
query{
  DefaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`