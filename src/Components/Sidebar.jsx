import React from 'react'
import Navigation from './Navigation'

const Sidebar = ({ nav }) => {
    return (
        <>
            <aside id="sidebar" className={!nav ? "sidebar" : "sidebar open"}>
                <div className="menu">
                    <Navigation />
                </div>
            </aside>
        </>
    )
}

export default Sidebar