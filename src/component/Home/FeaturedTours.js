import React from 'react'
import Tour from '../Tours/Tour'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getTours = graphql`
query{
  tours:allContentfulTour(filter:{featured:{eq:true}}){
    edges{
      node{
        name
        price
        slug
        country
        days
		contentful_id
        images{
            fluid{
                ...GatsbyContentfulFluid_tracedSVG
            }
        }
      }
    }
  }
}
`

const FeaturedTours = () => {
    const {tours:{edges:allFeaturedTours}} = useStaticQuery(getTours)
    return (
        <section className={styles.tours}>
            <Title title='featured' subtitle='tours' />
            <div className={styles.center}>
                {allFeaturedTours.map(({node}) => {
                    return <Tour key={node.contentful_id} tour={node} />
                })}
            </div>
            <AniLink fade to='/tours' className='btn-primary'>all tours</AniLink> 
        </section>
    )
}
export default FeaturedTours