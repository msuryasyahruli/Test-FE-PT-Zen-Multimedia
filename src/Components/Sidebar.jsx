import React from 'react'

const Sidebar = ({ nav }) => {
    return (
        <>
            <aside id="sidebar" className={!nav ? "sidebar" : "sidebar open"}>
                <h2>Sidebar</h2>
            </aside>
        </>
    )
}

export default Sidebar