import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../component/Layout"
import Banner from '../component/Banner'
import About from '../component/Home/About'
import Services from '../component/Home/Services'
import StyledHero from '../component/StyledHero'
import FeaturedTours from '../component/Home/FeaturedTours'
import { graphql } from 'gatsby'

export default ({data}) => {
  return (
    <Layout>
      <StyledHero home='true' img={data.DefaultBcg.childImageSharp.fluid}>
        <Banner title='start exploring tours' info='SO MUCH LEFT TO BE DISCOVERED'>
          <AniLink fade to='/tours' className='btn-white'>Explore Tours</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
    )
}

export const query = graphql`
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