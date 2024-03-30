import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Footer from './Footer'
import { useTheme } from '../ThemeContext';

const Layout = () => {
    const { theme } = useTheme()
    const [onNav, setOnNav] = useState(false)
    
    const onShow = () => {
        setOnNav(!onNav)
    }

    return (
        <>
            <Header show={onShow} />
            <div className={`container ${theme}`}>
                <Sidebar nav={onNav} />
                <MainContent />
            </div>
            <Footer />
        </>
    )
}

export default Layout