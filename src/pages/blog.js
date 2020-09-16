import React, { Component } from 'react'
import Layout from "../component/Layout"
import StyledHero from '../component/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../component/Blog/BlogList'

export default class blog extends Component {
    render() {
        return (
            <Layout>
                <StyledHero img={this.props.data.BlogBcg.childImageSharp.fluid}>
                </StyledHero>
                <BlogList />
            </Layout>
        )
    }
}

export const query = graphql `
query{
  BlogBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
