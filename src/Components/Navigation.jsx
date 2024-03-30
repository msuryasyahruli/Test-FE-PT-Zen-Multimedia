import React from 'react'

const Navigation = () => {
    const menuItems = ['Home', 'Products', 'Setting'];

    return (
        <>
            <nav>
                {menuItems.map((item, index) => (
                    <button key={index} className="menu-button">{item}</button>
                ))}
            </nav>
        </>
    )
}

export default Navigation