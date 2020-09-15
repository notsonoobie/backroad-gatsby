import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query AboutImage {
    AboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
    const { AboutImage } = useStaticQuery(query)
    return (
        <section className={styles.about}>
            <Title title='about' subtitle='us' />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <Img fluid={AboutImage.childImageSharp.fluid} alt='Awesome Landscape' />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the shine</h4>
                    <p>Tempor esse consequat aute ea. Sit Lorem ex elit pariatur eiusmod pariatur cupidatat velit in enim. Minim cillum ullamco est nisi sint elit consequat et cillum. In cupidatat aute aliquip voluptate ipsum.</p>
                    <p> in velit duis dolor in minim. Sint eiusmod fugiat non Lorem exercitation labore deserunt elit dolor labore laborum ipsum commodo. Ut consectetur consequat cupidatat adipisicing labore mollit ex.</p>
                    <button type="button" className='btn-primary'>Read More</button>
                </article>
            </div>
        </section>
    )
}
export default About