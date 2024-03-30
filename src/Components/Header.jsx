import React from 'react'
import { useTheme } from '../ThemeContext';

const Header = ({show}) => {
    const { toggleTheme } = useTheme();

    return (
        <>
            <header>
                <h1>Header</h1>
                <div>
                    <button id="theme-toggle" onClick={toggleTheme}>Theme</button>
                    <button className="burger-button" onClick={show}>
                        ☰
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header