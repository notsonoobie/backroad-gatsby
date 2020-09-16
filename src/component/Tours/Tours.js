import React from 'react'
import TourLIst from './TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getAllTours = graphql`
query {
    allTours: allContentfulTour {
        edges {
            node {
                name
                slug
                price
                country
                start
                featured
                days
                contentful_id
                description {
                    description
                }
                journey {
                    day
                    info
                }
                images {
                    fluid {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

const Tours = () => {
    const { allTours : { edges : response } } = useStaticQuery(getAllTours)
    return ( <TourLIst response={response} /> )
    }
export default Tours