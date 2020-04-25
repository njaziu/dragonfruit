import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../css/layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Layout = ({children}) => {
    return (
        <div className="main">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
