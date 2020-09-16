import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../component/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogTemplate = ({ data }) => {
    const { title, published, text : { json } } = data.post
    const options = {
        renderNode : {
            "embedded-asset-block" : (node) => {
                return (
                    <div>
                        <img width='400' src={node.data.target.fields.file['en-US'].url} />
                    </div>
                )
            },
            "embedded-entry-block" : (node) => {
                const { title, image, text } = node.data.target.fields
                return (
                    <div>
                        <h1>this is another post</h1>
                        <h3>{title['en-US']}</h3>
                        <img width='400' src={image['en-US'].fields.file['en-US'].url} alt='tour' />
                        {
                            documentToReactComponents(text['en-US'])
                        }
                    </div>
                )
            }
        }
    }
    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1>{title}</h1>
                    <h4>Published At : {published}</h4>
                    <article className={styles.post}>
                        { documentToReactComponents(json, options) }
                    </article>
                    <AniLink fade to='/blog' className='btn-primary'>All Posts</AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        post:contentfulPost(slug:{eq:$slug}){
            title
            published(formatString:"MMMM Do, YYYY")
            text{
                json
            }
        }
    }
`

export default BlogTemplate