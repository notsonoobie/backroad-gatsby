import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/Layout'
import SEO from '../component/SEO'
import StyledHero from '../component/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../component/SingleTour/Day'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const TourTemplate = ({ data }) => {
    const { name, price, days, country, start, description : { description }, images, journey } = data.tour
    const [mainImg, ...tourImg] = images
    return (
        <Layout>
        <SEO title={name} />
            <StyledHero img={mainImg.fluid} />
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {
                            tourImg.map((item,index) => <Img className={styles.image} fluid={item.fluid} key={index} alt='Tours' /> )
                        }
                    </div>
                    <h2>{name}</h2>
                    <div className={styles.info}>
                        <p>
                            <FaMoneyBillWave className={styles.icon} />
                            starting from ${price}
                        </p>
                        <p>
                            <FaMap className={styles.icon} />
                            {country}
                        </p>
                    </div>
                    <h4>Starts On : {start}</h4>
                    <h4>Duration : {days} Days</h4>
                    <p className={styles.desc}>{description}</p>
                    <h2>Daily Schedule</h2>
                    <div className={styles.journey}>
                        {
                            journey.map((item,index) => <Day key={index} day={item.day} info={item.info} /> )
                        }
                    </div>
                    <AniLink fade to='/tours' className='btn-primary'>Back To Tours</AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug:String!){
        tour:contentfulTour(slug:{eq:$slug}){
            price
            name
            days
            country
            start(formatString: "dddd MMMM Do, YYYY")
            journey{
                day
                info
            }
            description{
                description
            }
            images{
                fluid{
                    ...GatsbyContentfulFluid_tracedSVG
                }
            }
        }
    }
` 

export default TourTemplate