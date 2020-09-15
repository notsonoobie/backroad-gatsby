import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'
const Layout = (props) => {
    return (
        <>
         <Navbar />
            { props.children }
         <Footer />   
        </>
    )
}
export default Layout