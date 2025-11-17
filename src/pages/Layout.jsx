import React from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { NavBar } from '../components/layout/NavBar'

export const Layout = ({id, children, backButton = true}) => {
    return (
        <div className="container">
            <Header />
            <main id={id}>
                {children}
            </main>
            <NavBar />  
            <Footer backButton={backButton} />
        </div>
    )

}
