import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact}>
            <Title title='CONTACT' subtitle='US' />
            <div className={styles.center}>
                <form action='https://formspree.io/swastikmedical74@gmail.com' method='POST' className={styles.form}>
                    <div>
                        <input type='text' name='name' id='name' className={styles.formControl} placeholder='John Doe' />
                        <input type='email' name='email' id='email' className={styles.formControl} placeholder='email@host.com' />
                        <div>
                            <textarea name='message' id='message' rows='10' className={styles.formControl} placeholder='Tell us about your experience...' />
                        </div>
                        <div>
                            <input type='submit' value='Submit' className={styles.submit} />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact