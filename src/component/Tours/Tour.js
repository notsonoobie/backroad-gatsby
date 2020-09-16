import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getDefaultImage = graphql`
query{
    img:file(relativePath:{eq:"defaultBcg.jpeg"}){
        childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}
`

const Tour = ({tour}) => {
    const { name, price, country, days, slug, images } = tour
    const {img : {childImageSharp : {fluid : defaultFluidImg}}} = useStaticQuery(getDefaultImage)
    let mainImage = images ? images[0].fluid : defaultFluidImg;

    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Img fluid={mainImage} className={styles.img} alt='tour' />
                <AniLink fade className={styles.link} to={`/tours/${slug}`}>details</AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon} />
                        {country}
                    </h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>from ${price}</h6>
                    </div>
                </div>
            </div>
        </article>
    )
}

Tour.propTypes  = {
    tour : PropTypes.shape({
        name : PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        days: PropTypes.number.isRequired,
        price : PropTypes.number.isRequired,
        images : PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default Tour