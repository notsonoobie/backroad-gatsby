import React, { Component } from 'react'
import Layout from "../component/Layout"
import StyledHero from '../component/StyledHero'
import { graphql } from 'gatsby'

export default class tours extends Component {
    render() {
        return (
            <Layout>
                <StyledHero img={this.props.data.DefaultBcg.childImageSharp.fluid}>
                </StyledHero>
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