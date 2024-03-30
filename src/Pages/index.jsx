import React from 'react'
import ThemeProvider from '../ThemeContext'
import Header from '../Components/Header'
import Navigation from '../Components/Navigation'
import Sidebar from '../Components/Sidebar'
import MainContent from '../Components/MainContent'
import Footer from '../Components/Footer'

const Index = () => {
    return (
        <ThemeProvider>
            <Header />
            <Navigation />
            <div className="container">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </ThemeProvider>
    )
}

export default Index