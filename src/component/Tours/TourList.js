import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

export default class TourList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tours : [],
            sortedTours : [],
        }
    }
    componentDidMount(){
        this.setState({
            tours : this.props.response,
            sortedTours : this.props.response
        })
    }
    render() {
        return (
            <section className={styles.tours}>
                <Title title='our' subtitle='tours' />
                <div className={styles.center}>
                    {
                        this.state.sortedTours.map(({node}) => <Tour tour={node} key={node.contentful_id} />)
                    }
                </div>
            </section>
        )
    }
}
